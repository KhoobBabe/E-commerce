import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, HttpClientModule ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],

    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log('Form Submitted', this.checkoutForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
