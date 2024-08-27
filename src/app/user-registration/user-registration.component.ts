import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

    registrationForm : FormGroup;

    constructor(private fb: FormBuilder) {
      this.registrationForm = this.fb.group({

        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, this.matchPassword.bind(this)]],
      })
    }

    matchPassword(control: any): { [key: string]: boolean } | null {
      if (this.registrationForm && control.value !== this.registrationForm.controls['password'].value) {
        return { passwordMismatch: true };
      }
      return null;
    }


  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
    }
  }
}
