import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-fundamental';

  doAppMaxChange(value: number): void {
    console.log(`Do App Max Change Fucntion : ${value}`);
  }

  doAppMinChange(value: number): void {
    console.log(`Do App Min Chnage Function : ${value}`);
  }
}
