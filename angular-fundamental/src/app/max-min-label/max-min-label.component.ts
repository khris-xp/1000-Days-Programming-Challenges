import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-max-min-label',
  templateUrl: './max-min-label.component.html',
  styleUrls: ['./max-min-label.component.css'],
})
export class MaxMinLabelComponent {
  @Input() maxLabel: string = '';
  @Input() minLabel: string = '';

  @Output() maxChange = new EventEmitter<number>();
  @Output() minChange = new EventEmitter<number>();

  doAppMaxChange(value: number): void {
    this.maxChange.emit(value);
  }

  doAppMinChange(value: number): void {
    this.minChange.emit(value);
  }
}
