import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { ChooseQuizzComponent } from './components/choose-quizz/choose-quizz.component';
import { QuizzCardsComponent } from './components/quizz-cards/quizz-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseQuizzComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizzCardsComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
