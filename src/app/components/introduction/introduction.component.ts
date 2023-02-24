import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent {
  readonly dateOfMyBirth: Date = new Date('1995-07-04');
  myAge: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.ageFromDateOfBirthday(this.dateOfMyBirth);
  }

  ageFromDateOfBirthday(dateOfBirth: Date): number {
    const diff = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(diff);
    return (this.myAge = Math.abs(ageDate.getUTCFullYear() - 1970));
  }
}
