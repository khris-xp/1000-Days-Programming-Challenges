import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinLabelComponent } from './max-min-label/max-min-label.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';
import { TestRequestModule } from './test-request/test-request.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinLabelComponent,
    SquareFlexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
