import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactPopupComponent } from '../../../shared/components/contact-popup/contact-popup.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-join-our-team',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonModule],
  templateUrl: './join-our-team.component.html',
  styleUrl: './join-our-team.component.scss'
})
export class JoinOurTeamComponent {
  constructor(public dialogService: DialogService) {}
  ref: DynamicDialogRef | undefined;

  showPopup() {
    this.ref = this.dialogService.open(ContactPopupComponent, {
      baseZIndex: 10000,
      data: {
        title: 'JOIN OUR TEAM',
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
      img: 'assets/images/sliderImage5.png',
      header: 'JOIN OUR TEAM',
    },
  ];
  content: any = [
    {
      headerimg: 'assets/images/headerLeftBorder.svg',
      img: 'assets/images/property9.png',
      h4: 'Why',
      h1: 'DOM9',
      cardHeader: 'Always Improving',
      cardPara:
        'Canal Front Residences is a brand-new luxury residential complex.',
      header: 'Residences is a brand-new luxury complex.',
      para1:
        'The blend of a modern classic with rich quality will certainly reflect the calibre of Dubai luxury property real estate. It is even right next door to an RTA marine transport station that services a variety of Dubai locations.',
      para2:
        'Investing in apartments in Canal Front Residences will suit both tenants looking for proximity to attractions.',
      btn: 'CONTACT US',
    },
  ];
}
