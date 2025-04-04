import { Component, OnInit } from '@angular/core';
import quizData from "../../../assets/data/quizzes.json"
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit {

  quizId: number = 0;
  currentQuiz: any;
  title:string = ""

  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string =""

  questionIndex:number =0
  questionMaxIndex:number=0

  finished:boolean = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = +params['id'];
      this.loadQuiz();
    });
  }

  loadQuiz() {

    this.currentQuiz = quizData.quizzes.find((quiz: any) => quiz.id === this.quizId);

    if (this.currentQuiz) {
      this.finished = false;
      this.title = this.currentQuiz.title;
      this.questions = this.currentQuiz.questions;
      this.questionSelected = this.questions[this.questionIndex];
      this.questionMaxIndex = this.questions.length;
    } else {
      console.error('Quiz não encontrado para o ID:', this.quizId);
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswer: string = await this.checkResult(this.answers);
      this.finished = true;
      this.answerSelected = this.currentQuiz.results[finalAnswer as keyof typeof this.currentQuiz.results];
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, i, arr) => {
      if (
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });
    return result;
  }
}
