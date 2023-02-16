import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-fundamental';
  value = 0;
  calBuffet(value: string) {
    this.value = (Number(value) * 3) / 4;
  }
}
