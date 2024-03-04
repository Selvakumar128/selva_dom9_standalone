import { APP_INITIALIZER, Component } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import * as data from '../../../assets/models/data.json';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { routes } from '../../app.routes';
import { ConfigLoader } from '../../app.config';
import { ConfigService } from '../../shared/services/config.service';


interface Value {
  name: string;
}
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,DropdownModule,FormsModule,ConfirmPopupModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [DialogService,MessageService,provideAnimations(),ConfirmationService]
})

export class HomePageComponent {

  dropdownValue: Value[];
  selectedValue: Value | any;
  constructor(private router: Router) {
    this.dropdownValue = [{ name: 'SALE' }, { name: 'RENT' }, { name: 'BUY' }];
  }

  homeData: any = (data as any).default.home;
  ngOnInit() {}

  whatsapp: any = [
    {
      img: 'assets/images/whatsapp.png',
    },
  ];

  header: any = [
    {
      headerImg: 'assets/images/HeaderLine2.png',
      subHeader1: 'HOT',
      mainHeader1: 'PROPERTIES',
      subHeader2: 'NEW TO',
      mainHeader2: 'MARKET',
    },
  ];

  homeSlider: any = [
    {
      image: 'assets/images/property11.png',
      header: 'PROPERTIES FOR SALE',
      routeLink: 'property-for-sale',
      page: 'sale',
    },
    {
      image: 'assets/images/property17.png',
      header: 'PROPERTIES FOR RENT',
      routeLink: 'property-for-sale',
      page: 'rent',
    },
    {
      image: 'assets/images/property10.png',
      header: 'PROJECTS',
      page: 'projects',
    },
    {
      image: 'assets/images/person9.png',
      header: 'LIST YOUR PROPERTY WITH US',
      page: 'list',
    },
  ];

  navigateTo(details: any) {
    if (details?.page == 'sale') {
      this.router.navigateByUrl('property-for-sale', {
        state: { page: 'sale' },
      });
    } else if (details?.page == 'rent') {
      this.router.navigateByUrl('property-for-rent', {
        state: { page: 'rent' },
      });
    } else if (details?.page == 'projects') {
      this.router.navigateByUrl('projects');
    } else if (details?.page == 'list') {
      this.router.navigateByUrl('list-your-property');
    }
  }

  content1: any = [
    {
      img1: 'assets/images/property20.png',
      img2: 'assets/images/property21.png',
      img3: 'assets/images/property23.png',
      img4: 'assets/images/property22.png',
      img5: 'assets/images/property12.png',
      location: 'assets/images/Icon-location.png',
      p1: 'RENT',
      p2: 'SALE',
      header1: 'Jumeirah',
      header2: 'Downtown',
      header3: 'Residency',
      header4: 'Jumeirah',
      header5: 'Liv Marina',
      amt1: 'AED 990,000',
      amt2: 'AED 990,900',
      amt3: 'AED 990,000',
      amt4: 'AED 890,000',
      amt5: 'AED 790,000',
      locName1: 'Emirates',
      locName2: ' Opera Grand',
      locName3: "Za'abeel",
      locName4: 'Al Karama',
      locName5: "Za'abeel",
    },
  ];
  content2: any = [
    {
      img1: 'assets/images/property20.png',
      img2: 'assets/images/property12.png',
      img3: 'assets/images/property23.png',
      img4: 'assets/images/property21.png',
      img5: 'assets/images/property22.png',
      location: 'assets/images/Icon-location.png',
      p1: 'RENT',
      p2: 'SALE',
      header1: 'Jumeirah',
      header2: 'Downtown',
      header3: 'Residency',
      header4: 'Jumeirah',
      header5: 'Liv Marina',
      amt1: 'AED 990,000',
      amt2: 'AED 990,900',
      amt3: 'AED 990,000',
      amt4: 'AED 890,000',
      amt5: 'AED 790,000',
      locName1: 'Emirates',
      locName2: ' Opera Grand',
      locName3: "Za'abeel",
      locName4: 'Al Karama',
      locName5: "Za'abeel",
    },
  ];
}
