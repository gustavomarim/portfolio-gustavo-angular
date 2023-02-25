import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MaxDisplayWidthComponent } from './components/layout/max-display-width/max-display-width.component';
import { ExperienceCardComponent } from './components/template/experience-card/experience-card.component';
import { HeaderComponent } from './components/template/header/header.component';
import { AcademicEducationComponent } from './components/academic-education/academic-education.component';
import { AcademicEducationCardComponent } from './components/template/academic-education-card/academic-education-card.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
