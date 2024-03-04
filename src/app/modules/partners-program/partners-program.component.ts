import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactPopupComponent } from '../../shared/components/contact-popup/contact-popup.component';

@Component({
  selector: 'app-partners-program',
  standalone: true,
  imports: [ButtonModule,CommonModule],
  templateUrl: './partners-program.component.html',
  styleUrl: './partners-program.component.scss'
})
export class PartnersProgramComponent {
  constructor(public dialogService: DialogService) {}
  ref: DynamicDialogRef | undefined;

  showPopup() {
    this.ref = this.dialogService.open(ContactPopupComponent, {
      baseZIndex: 10000,
      data: {
        title: 'PARTNERS PROGRAM',
        submit: this.onContactFormSubmit.bind(this),
      },
      width: '50vw',
      height:'30vw',
      styleClass: 'contactPopup',
    });
  }

  onContactFormSubmit(formData: any) {
    console.log('formData', formData);
    this.ref?.close();
  }

  whatsapp: any = [
    {
      img: 'assets/images/whatsapp.png',
    },
  ];
  slider: any = [
    {
      img: 'assets/images/parnersImg.svg',
      header: 'PARTNERS PROGRAM',
    },
  ];
  content: any = [
    {
      headerimg: 'assets/images/headerLeftBorder.svg',
      img: 'assets/icons/contactus.svg',
      h4: 'Partner with',
      h1: 'DOM9',
      cardHeader: 'Always Improving',
      cardPara:
        'Canal Front Residences is a brand-new luxury residential complex.',
      header: 'Partners program with dom9',
      para1:
        'The blend of a modern classic with rich quality will certainly reflect the calibre of Dubai luxury property real estate. It is even right next door to an RTA marine transport station that services a variety of Dubai locations.',
      para2:
        'Investing in apartments in Canal Front Residences will suit both tenants looking for proximity to attractions.',
      btn: 'CONTACT US',
    },
  ];
}
