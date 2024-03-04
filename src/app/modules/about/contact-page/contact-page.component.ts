import { Component } from '@angular/core';
import * as data from '../../../../assets/models/data.json';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AngularPhoneNumberInput } from 'angular-phone-number-input';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ButtonModule,FormsModule,CommonModule,CardModule,ReactiveFormsModule,AngularPhoneNumberInput],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  contactData: any = (data as any).default.Contactus;
  // CountryISO = CountryISO;
  // preferredCountries: CountryISO[] = [CountryISO.SaudiArabia];
  constructor(private fb: FormBuilder) {}
  PhoneNumberFormat: string = "9"
  includeDialCode = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', Validators.required],
  });

  ngOnInit() {
    console.log(this.contactData);
  }

  validOrNot() {
    const phone: any = this.form.value?.phone;
    if (phone?.number?.length !== 9 && this.form.get('phone')?.touched) {
      return 'custom';
    }
    return '';
  }

  onSubmit() {
    let phone: any = this.form.value?.phone;

    if (
      this.form.value.email == '' ||
      this.form.value.message == '' ||
      this.form.value.name == '' ||
      !phone ||
      phone?.number?.length !== 9
    ) {
      this.form.markAllAsTouched();
      return;
    } else {
    }
  }

}
