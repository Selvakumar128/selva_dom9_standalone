import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AngularPhoneNumberInput } from 'angular-phone-number-input';


@Component({
  selector: 'app-contact-popup',
  standalone: true,
  imports: [ButtonModule,RadioButtonModule,CommonModule,CardModule,ReactiveFormsModule,AngularPhoneNumberInput],
  templateUrl: './contact-popup.component.html',
  styleUrl: './contact-popup.component.scss'
})
export class ContactPopupComponent {
  constructor(private config: DynamicDialogConfig, private fb: FormBuilder) {}
  configData: any;
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', Validators.required],
    selectedCategory: ['P', [Validators.required]],
  });

  // CountryISO = CountryISO;
  // preferredCountries: CountryISO[] = [CountryISO.SaudiArabia];

  popupLabels: any = {
    name: 'NAME *',
    phone: 'PHONE *',
    email: 'EMAIL *',
    message: 'MESSAGE *',
    contactPreference: 'Contact Preference',
    buttonLabel: 'SUBMIT',
    propId: 'Property ID : ',
    type: 'Type : ',
    agent: 'Agent : ',
  };

  categories: any[] = [
    { name: 'Phone', key: 'P' },
    { name: 'Email', key: 'E' },
  ];

  ngOnInit() {
    this.configData = this.config?.data;
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
      this.configData?.submit(this.form.value);
    }
  }
}
