import { Component } from '@angular/core';
import { ContactPopupComponent } from '../../../shared/components/contact-popup/contact-popup.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { PanelModule } from 'primeng/panel';
import { FeedbackPopupComponent } from '../../../shared/components/feedback-popup/feedback-popup.component';
import { SharePopupComponent } from '../../../shared/components/share-popup/share-popup.component';
import { CarouselPopupComponent } from '../../../shared/components/carousel-popup/carousel-popup.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CardModule,ButtonModule,CarouselModule,PanelModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  itemsPerSlide = 1;
  currentIndex = 0;
  interval = 10000;
  isReadMore = true;
  constructor(public dialogService: DialogService) {}
  ref: DynamicDialogRef | undefined;

  showPopup(selectedImage: any) {
    this.ref = this.dialogService.open(CarouselPopupComponent, {
      header: '',
      data: {
        selectedImage: selectedImage,
        imgCollection: this.imgCollection,
      },
      styleClass: 'contactPopup',
      dismissableMask: true,
    });
    console.log(selectedImage, this.imgCollection, 'test');
  }

  showFeedback(data: any, type: any) {
    this.ref = this.dialogService.open(FeedbackPopupComponent, {
      baseZIndex: 10000,
      data: {
        title: 'Do you find this site user friendly ?',
        submit: this.onContactFormSubmit.bind(this),
      },
      dismissableMask: true,
      width: '50vw',
      styleClass: 'feedbackPopup',
    });
  }
  show(data: any, type: any) {
    this.ref = this.dialogService.open(ContactPopupComponent, {
      baseZIndex: 10000,
      data: {
        title: 'REQUEST INFORMATION',
        submit: this.onContactFormSubmit.bind(this),
      },
      width: '50vw',
      styleClass: 'contactPopup',
    });
  }

  sharePopup(data: any, type: any) {
    this.ref = this.dialogService.open(SharePopupComponent, {
      baseZIndex: 10000,
      data: {
        title: 'REQUEST INFORMATION',
        submit: this.onContactFormSubmit.bind(this),
      },
      width: '50vw',
      styleClass: 'contactPopup',
    });
  }
  onContactFormSubmit(formData: any) {
    console.log('formData', formData);
    this.ref?.close();
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  whatsapp: any = [
    {
      img: 'assets/images/whatsapp.png',
    },
  ];

  imgCollection: Array<object> = [
    {
      thumbImage: 'assets/images/property4.png',
      // title: 'Jumeirah'
    },
    {
      thumbImage: 'assets/images/property5.png',
      // title: 'Residency'
    },
    {
      thumbImage: 'assets/images/property6.png',
      // title: 'Live Marina'
    },
    {
      thumbImage: 'assets/images/property7.png',
      // title: 'Jumeirah'
    },
  ];

  data: any = [
    {
      header: 'RIVER FRONT RESIDENTS',
      header2: 'River Front Residents, Tilal Al Ghaf',
      para1: 'By KK Bilders',
      para2: 'Year of Completion',
      year1: '2024',
      para3: 'Launch Date',
      year2: 'Feb 10 , 2024',
      btn: 'REQUEST INFORMATION',
      location: 'assets/icons/location.svg',
    },
  ];
  data1: any = [
    {
      type: 'Villa',
      bedroom: '3',
      floor: '4',
      amenties:
        'Study Room, Balcony, Private Pool, Walk-in closet, Covered Parking, Private Garden',
      list2: 'Property Type :',
      list3: 'Bedrooms :',
      list4: 'Floors :',
      list7: 'Amenities :',
    },
  ];

  list2: any = [
    {
      para1:
        'This is a stunning 5-bedroom home, located on the side of the main lake of the Jumeirah Islands. The home has 14,000 square feet of garden facing the south, providing ample space for entertaining.The large back garden offers lots of privacy, as well as a private swimming pool.',
      para2:
        "The villa is a roman style design with a master view floorplan -which consists of two separate living areas on the first floor, a kitchen, a dining area, a guest bedroom with an ensuite, and a maid's room.",
      para3:
        'On the first floor, there are four bedrooms, each with an ensuite, a full lake view, and with plenty of built-in wardrobes.',
      para4:
        'This exciting and dynamic development project consists of two towers, Tower West and Tower East, and will offer luxury property buyers a range of accommodation options including 1, 2, and 3-bedroom apartments. ',
      para5:
        'Given the draw of Dubai as a must-visit and must-live destination, as well as its significant rise in popularity as a global mobility and relocation country, residential projects of this type have been thoughtfully planned to appeal to the widest possible range of tastes and tenant demands.',
      para6:
        'Starting from 972 sq. ft. each of the apartments on the 14 floors of two towers are framed by floor-to-ceiling windows which will offer panoramic views of the surrounding vista across the green Safa Park, the Dubai Water Canal embankment, the Tolerance Bridge, the Downtown Dubai skyline and the Arabian Gulf.',
      read: 'Read more',
    },
  ];

  list3: any = [
    {
      img: 'assets/images/Img-Floorplan.png',
      header1: 'Two Bedroom Flat',
      header2: 'Three Bedroom Flat',
      header3: 'Garage',
      para1: '740 Sq ft',
      para2: '740 Sq ft',
      para3: '740 Sq ft',
    },
  ];

  content1: any = [
    {
      img1: 'assets/images/property20.png',
      img2: 'assets/images/property21.png',
      img3: 'assets/images/property23.png',
      img4: 'assets/images/property22.png',
      img5: 'assets/images/property12.png',
    },
  ];

  header: any = [
    {
      mainHeader1: 'GALLERY',
    },
  ];
}
