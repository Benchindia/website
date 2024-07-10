import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
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
      message: ['', [Validators.required]],
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
    const templateParams = {
      firstName: this.baseForm.value.firstName,
      lastName: this.baseForm.value.lastName,
      email: this.baseForm.value.email,
      message: this.baseForm.value.message,
    };

    emailjs.send('service_6chduek', 'template_e8fl42t', templateParams, 't6z3BX_yZSuWHekGU')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        this.baseForm.reset();
      }, (error) => {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again.');
      });
  }
}