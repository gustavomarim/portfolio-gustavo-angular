import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css'],
})
export class ExperienceCardComponent {
  @Input() companyYear!: string;
  @Input() companyTitle!: string;
  @Input() positionInCompany!: string;
  @Input() dutiesOfPosition!: string;
  @Input() companySkills!: any;
}
