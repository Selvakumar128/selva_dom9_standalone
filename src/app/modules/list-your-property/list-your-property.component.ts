import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
// import { CountryISO } from 'ngx-intl-tel-input';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AngularPhoneNumberInput } from 'angular-phone-number-input';

@Component({
  selector: 'app-list-your-property',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonModule,RadioButtonModule,ReactiveFormsModule,AngularPhoneNumberInput],
  templateUrl: './list-your-property.component.html',
  styleUrl: './list-your-property.component.scss'
})
export class ListYourPropertyComponent {
  whatsapp: any = [
    {
      img: 'assets/images/whatsapp.png',
    },
  ];

  slider: any = [
    {
      img: 'assets/images/sliderImage4.png',
      header1: 'LIST YOUR PROPERTY',
      header2: 'WITH US',
    },
  ];

  header: any = [
    {
      headerImg: 'assets/images/headerLeftBorder.svg',
      subHeader: 'HOW',
      mainHeader: 'WE WORK',
    },
  ];

  card: any = [
    {
      header:
        'Please complete the form below and our agents will get right back to you in less than 24 hours.',
      label1: 'NAME*',
      label2: 'PHONE*',
      label3: 'EMAIL*',
      label4: 'MESSAGE*',
      label5: 'Contact Preference',
      btn: 'SUBMIT',
    },
  ];

  cardContent: any = [
    {
      image: 'assets/icons/cardIcon-1.svg',
      subHeader: 'Luxury complex',
      para: ' Canal Front Residences is a brand-new luxury residential complex situated on the banks of the Dubai Water Canal timeless pastel textures and designer-quality finishes.',
    },
    {
      image: 'assets/icons/cardIcon-2.svg',
      subHeader: 'Luxury complex',
      para: ' Canal Front Residences is a brand-new luxury residential complex situated on the banks of the Dubai Water Canal timeless pastel textures and designer-quality finishes.',
    },
    {
      image: 'assets/icons/cardIcon-3.svg',
      subHeader: 'Luxury complex',
      para: ' Canal Front Residences is a brand-new luxury residential complex situated on the banks of the Dubai Water Canal timeless pastel textures and designer-quality finishes.',
    },
  ];

  // preferredCountries: CountryISO[] = [CountryISO.SaudiArabia];

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', Validators.required],
    selectedCategory: ['P', [Validators.required]],
  });

  categories: any[] = [
    { name: 'Phone', key: 'P' },
    { name: 'Email', key: 'E' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

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
