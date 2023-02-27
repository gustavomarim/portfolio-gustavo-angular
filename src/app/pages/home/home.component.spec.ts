import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AcademicEducationComponent } from 'src/app/components/academic-education/academic-education.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { IntroductionComponent } from 'src/app/components/introduction/introduction.component';
import { MaxDisplayWidthComponent } from 'src/app/components/layout/max-display-width/max-display-width.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { MessagesComponent } from 'src/app/components/shared/messages/messages.component';
import { AcademicEducationCardComponent } from 'src/app/components/template/academic-education-card/academic-education-card.component';
import { ExperienceCardComponent } from 'src/app/components/template/experience-card/experience-card.component';
import { FooterComponent } from 'src/app/components/template/footer/footer.component';
import { HeaderComponent } from 'src/app/components/template/header/header.component';
import { ContactFormComponent } from './../../components/template/contact-form/contact-form.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MessagesComponent,
        MaxDisplayWidthComponent,
        HeaderComponent,
        IntroductionComponent,
        ExperienceComponent,
        AcademicEducationComponent,
        ProjectsComponent,
        FooterComponent,
        AcademicEducationComponent,
        AcademicEducationCardComponent,
        ContactFormComponent,
        ExperienceCardComponent,
      ],
      imports: [
        HttpClientModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
