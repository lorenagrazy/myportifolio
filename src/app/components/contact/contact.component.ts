import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isError = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.phoneValidator]], // Adding custom validation
      body: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.http.post('https://formspree.io/f/xbjnzzvo', this.contactForm.value)
        .subscribe(
          (response) => {
            this.router.navigate(['/success']);

            setTimeout(() => {
              this.router.navigate(['/contact']);
            }, 4000);
          },
          (error) => {
            this.router.navigate(['/error']);
          }
        );
    } else {
      this.router.navigate(['/error']);
    }
  }

  phoneValidator(control: FormControl): { [s: string]: boolean } | null {
    const PHONE_REGEXP = /^[0-9]{10}$/;
    if (!PHONE_REGEXP.test(control.value)) {
      return { 'invalidPhone': true };
    }
    return null;
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get body() {
    return this.contactForm.get('body');
  }
}
