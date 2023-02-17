import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinLabelComponent } from './max-min-label/max-min-label.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';

@NgModule({
  declarations: [AppComponent, ActionBarComponent, MaxMinLabelComponent, SquareFlexComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
