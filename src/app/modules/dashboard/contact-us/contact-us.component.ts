import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  baseForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formInIt()
  }

  formInIt(): any {
    this.baseForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      message: [''],
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.baseForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  formSubmit(){
    if(this.baseForm.invalid) {
      this.baseForm.markAllAsTouched()
      return
    }
    console.log(this.baseForm.value)
  }
}
