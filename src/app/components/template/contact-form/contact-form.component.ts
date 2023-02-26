import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  @Output() onSubmit = new EventEmitter<any>();
  @Input() btnText!: string;

  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
    });
  }

  // Inicializa os atributos do formulário
  get name(): AbstractControl<any, any> {
    return this.contactForm.get('name')!;
  }

  get email(): AbstractControl<any, any> {
    return this.contactForm.get('email')!;
  }

  get text(): AbstractControl<any, any> {
    return this.contactForm.get('text')!;
  }

  submit(): void {
    if (this.contactForm.invalid) return;

    this.onSubmit.emit(this.contactForm.value);
    this.contactForm.reset();
  }
}
