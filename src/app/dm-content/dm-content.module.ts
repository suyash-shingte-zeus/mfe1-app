import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardDeckComponent } from './word-card-deck/word-card-deck.component';
import { RouterModule } from '@angular/router';
import { FlashCardDeckComponent } from './flash-card-deck/flash-card-deck.component';



@NgModule({
  declarations: [
    WordCardDeckComponent,
    FlashCardDeckComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WordCardDeckComponent
      }
    ])
  ],
  exports: [WordCardDeckComponent]
})
export class DmContentModule { }
