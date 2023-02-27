import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AcademicEducationComponent } from './components/academic-education/academic-education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MaxDisplayWidthComponent } from './components/layout/max-display-width/max-display-width.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MessagesComponent } from './components/shared/messages/messages.component';
import { AcademicEducationCardComponent } from './components/template/academic-education-card/academic-education-card.component';
import { ContactFormComponent } from './components/template/contact-form/contact-form.component';
import { ExperienceCardComponent } from './components/template/experience-card/experience-card.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    ExperienceComponent,
    ExperienceCardComponent,
    MaxDisplayWidthComponent,
    AcademicEducationComponent,
    AcademicEducationCardComponent,
    FooterComponent,
    ContactFormComponent,
    MessagesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
