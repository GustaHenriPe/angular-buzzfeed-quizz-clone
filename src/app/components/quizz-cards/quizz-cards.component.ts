import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-quizz-cards',
  standalone: true,
  imports:[RouterLink, BrowserModule],
  templateUrl: './quizz-cards.component.html',
  styleUrls: ['./quizz-cards.component.css']
})
export class QuizzCardsComponent implements OnInit {
  @Input()
  photoCover: string = ''
  @Input()
  title: string = 'Nome do Quizz'
  @Input()
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
  @Input()
  Id:string = '0'

  constructor(private router: Router) {


  }

  navigateToQuiz(){
    this.router.navigate(['/quiz', this.Id]);
  }

  ngOnInit(): void {
  }

}
