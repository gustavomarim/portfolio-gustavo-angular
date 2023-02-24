import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxDisplayWidthComponent } from './max-display-width.component';

describe('MaxDisplayWidthComponent', () => {
  let component: MaxDisplayWidthComponent;
  let fixture: ComponentFixture<MaxDisplayWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxDisplayWidthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaxDisplayWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
