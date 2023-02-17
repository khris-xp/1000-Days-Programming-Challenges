import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent {
  counter: number = 0;
  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter<number>();

  decrease(): void {
    if (this.counter - this.step > -1) {
      this.counter -= this.step;
      this.numberChange.emit(this.counter);
    }
  }
  increase(): void {
    if (this.counter + this.step < 100) {
      this.counter += this.step;
      this.numberChange.emit(this.counter);
    }
  }
}
