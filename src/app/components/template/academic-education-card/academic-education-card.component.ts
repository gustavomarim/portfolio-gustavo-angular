import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-academic-education-card',
  templateUrl: './academic-education-card.component.html',
  styleUrls: ['./academic-education-card.component.css'],
})
export class AcademicEducationCardComponent {
  @Input() universityType!: string;
  @Input() universityCourse!: string;
  @Input() universityName!: string;
}
