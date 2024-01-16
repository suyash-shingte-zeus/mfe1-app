import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-mfe/home/home.component';
import { WordCardDeckComponent } from './dm-content/word-card-deck/word-card-deck.component';
import { FlashCardDeckComponent } from './dm-content/flash-card-deck/flash-card-deck.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'word-card', component: WordCardDeckComponent},
  {path: 'flash-card', component: FlashCardDeckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
