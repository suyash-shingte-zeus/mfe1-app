import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardDeckComponent } from './word-card-deck/word-card-deck.component';
import { RouterModule } from '@angular/router';
import { FlashCardDeckComponent } from './flash-card-deck/flash-card-deck.component';
import { HomeComponent } from '../home-mfe/home/home.component';
import { HomeMfeModule } from '../home-mfe/home-mfe.module';
import { LoggerModule, NgxLoggerLevel, NGXLogger } from 'ngx-logger';



@NgModule({
  declarations: [
    WordCardDeckComponent,
    FlashCardDeckComponent,
  ],
  imports: [
    CommonModule,
    HomeMfeModule,
    RouterModule.forChild([
      {
        path: '',
        component: WordCardDeckComponent
      }
    ]),
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
    })
  ],
  exports: [WordCardDeckComponent],
})
export class DmContentModule { }
