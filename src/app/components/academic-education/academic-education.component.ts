import { Component } from '@angular/core';
import { ExtracurricularCourse } from 'src/app/core/models/ExtracurricularCourse';
import { extracurricularCourses } from './../../state/constants/extracurricularCourses';

@Component({
  selector: 'app-academic-education',
  templateUrl: './academic-education.component.html',
  styleUrls: ['./academic-education.component.css'],
})
export class AcademicEducationComponent {
  readonly extracurricularCourses: ExtracurricularCourse[] =
    extracurricularCourses;
}
