import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-fundamental';
  squareHeight: number = 200;
  squareWidth: number = 200;

  appCounter: number = 20;
}
