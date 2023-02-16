import { Component } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent {
  counter: number = 0;

  decrease(): void {
    console.log('Decrease Button');
    this.counter -= 1;
  }
  increase(): void {
    console.log('Increase Button');
    this.counter += 1;
  }
}
