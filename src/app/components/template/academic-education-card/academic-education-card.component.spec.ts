import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicEducationCardComponent } from './academic-education-card.component';

describe('AcademicEducationCardComponent', () => {
  let component: AcademicEducationCardComponent;
  let fixture: ComponentFixture<AcademicEducationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicEducationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicEducationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
