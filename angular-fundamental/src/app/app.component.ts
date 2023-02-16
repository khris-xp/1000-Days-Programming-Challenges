import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-fundamental';
  name = 'Khris Bharmmano';

  buttonClick() {
    console.log(this.name);
  }

  changeName(name: string) {
    this.name = name;
  }
}
