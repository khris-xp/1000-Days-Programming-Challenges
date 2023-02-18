import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRequestGetComponent } from './test-request-get.component';

describe('TestRequestGetComponent', () => {
  let component: TestRequestGetComponent;
  let fixture: ComponentFixture<TestRequestGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestRequestGetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestRequestGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
