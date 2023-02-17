import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-fundamental';
  activate: boolean = false;
  appCounter: number = 20;

  // Array
  customerList: Array<string> = ['Customer 1', 'Customer 2', 'Customer 3'];
  
}
