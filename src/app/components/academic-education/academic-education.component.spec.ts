import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcademicEducationCardComponent } from '../template/academic-education-card/academic-education-card.component';

import { AcademicEducationComponent } from './academic-education.component';

describe('AcademicEducationComponent', () => {
  let component: AcademicEducationComponent;
  let fixture: ComponentFixture<AcademicEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AcademicEducationComponent,
        AcademicEducationCardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AcademicEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
