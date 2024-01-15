import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMfeModule } from './home-mfe/home-mfe.module';
import { DmContentModule } from './dm-content/dm-content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeMfeModule,
    DmContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
