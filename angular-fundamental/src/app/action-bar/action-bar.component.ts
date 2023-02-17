import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent {
  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter<number>();
  @Input() counter: number = 20;
  @Input() inputDisplay: boolean = true;

  decrease(): void {
    if (this.counter - this.step > -1) {
      this.counter -= this.step;
      this.counterChange.emit(this.counter);
    }
  }
  increase(): void {
    if (this.counter + this.step < 100) {
      this.counter += this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
