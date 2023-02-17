import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinLabelComponent } from './max-min-label.component';

describe('MaxMinLabelComponent', () => {
  let component: MaxMinLabelComponent;
  let fixture: ComponentFixture<MaxMinLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxMinLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxMinLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
