import { Component } from '@angular/core';
import { ProfessionalExperience } from 'src/app/core/models/ProfessionalExperience';
import { professionalExp } from 'src/app/state/constants/professionalExpData';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  professionalExp: ProfessionalExperience[] = professionalExp;
}
