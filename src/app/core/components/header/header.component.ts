import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
// import { DialogscreenComponent } from './dialogscreen/dialogscreen.component';
import { NavigationEnd, Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SearchComponent } from '../../../shared/components/search/search.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DialogModule,PanelMenuModule,SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | any;
  showCloseIcon: any = false;
  flag: boolean = false;
  searchOpen = false;
  features: string[] = [];

  bedrooms = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ];
  rangeValues: number[] = [10000, 8000000];
  bathrooms = [
    {
      value: '1',
      label: '2+',
    },
    {
      value: '2',
      label: '3+',
    },
    {
      value: '3',
      label: '4+',
    },
    {
      value: '4',
      label: '5+',
    },
    {
      value: '5',
      label: '6+',
    },
  ];
  featureList = [
    {
      value: 'Study Room',
      label: 'Study Room',
    },
    {
      value: 'Walk-in Closet',
      label: 'Walk-in Closet',
    },
    {
      value: 'Balcony',
      label: 'Balcony',
    },
    {
      value: 'Covered Parking',
      label: 'Covered Parking',
    },
    {
      value: 'Private Pool',
      label: 'Private Pool',
    },
    {
      value: 'Private Garden',
      label: 'Private Garden',
    },
  ];
  bathroomValue: any;
  showAdvancedSearch = false;
  location = [
    {
      label: 'Palm Jumeirah',
      value: 'PJ',
    },
    {
      label: 'Dubai Marina',
      value: 'DM',
    },
  ];
  propertyType = [
    {
      label: 'Sale',
      value: 'S',
    },
    {
      label: 'Rent',
      value: 'R',
    },
  ];

  minSize = [
    { label: '100 sqft', value: '100 sqft' },
    { label: '200 sqft', value: '200 sqft' },
    { label: '300sqft', value: '' },
  ];
  navLabels: any = {
    phone: '+971 44 66 77 98',
    aboutUs: 'ABOUT US',
    aboutCompany: 'About Company',
    ourTeam: 'Our Team',
    joinOurTeam: 'Join Our Team',
    contactUs: 'Contact Us',
    projects: 'PROJECTS',
    partnersProgram: 'PARTNERS PROGRAM',
    listYourProperty: 'LIST YOUR PROPERTY',
    phoneimg: 'assets/icons/Mobile.svg',
    searchimg: 'assets/icons/globalSearchIcon.svg',
  };
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.flag = !this.flag;
      }
    });

    this.items = [
      // {
      // label: 'MENU',
      // items: [
      {
        label: 'ABOUT US',
        items: [
          {
            label: 'About Company',
            routerLink: '/about',
          },
          {
            label: 'Our Team',
            routerLink: '/team',
          },
          {
            label: 'Join Our Team',
            routerLink: '/join-our-team',
          },
          {
            label: 'Contact Us',
            routerLink: '/contact-us',
          },
        ],
      },

      {
        label: 'PROJECTS',
        routerLink: '/projects',
      },

      {
        label: 'PARTNERS PROGRAM',
        routerLink: '/partners-program',
      },
      {
        label: 'LIST YOUR PROPERTY',
        routerLink: 'list-your-property',
      },
    ];
  }

  showSearchPopup() {
    if (this.searchOpen == true) {
      this.searchOpen = false;
      this.ref?.close();
      return;
    }
    this.searchOpen = true;
    // this.ref = this.dialogService.open(DialogscreenComponent, {
    //   width: '80%',
    //   contentStyle: { 'max-height': '500px', overflow: 'auto' },
    //   styleClass: 'globalSearch',
    //   baseZIndex: 10000,
    // });

    // this.ref.onClose.subscribe(() => {
    //   this.searchOpen = false;
    // });
  }

  toggleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  onCancel() {
    this.showAdvancedSearch = false;
  }

  routeIsActive(routePath: string) {
    return this.router.url == routePath;
  }

  toggleMenuClick() {
    this.flag = !this.flag;
  }

}
