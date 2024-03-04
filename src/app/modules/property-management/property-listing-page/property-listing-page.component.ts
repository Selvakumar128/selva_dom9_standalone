import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { Subscription } from 'rxjs';
import { ApiServiceService } from '../../../shared/services/api-service.service';
import { SearchComponent } from "../../../shared/components/search/search.component";
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-property-listing-page',
    standalone: true,
    templateUrl: './property-listing-page.component.html',
    styleUrl: './property-listing-page.component.scss',
    imports: [DropdownModule, CommonModule, SearchComponent,FormsModule,NgxPaginationModule]
})
export class PropertyListingPageComponent {

  bathroomValue: any;
  bedrooms = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ];
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
  features: string[] = [];
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
  getSub = new Subscription();
  p: number = 1;
  page: any;
  prices = [{ rate: 'Low' }, { rate: 'Medium' }, { rate: 'High' }];
  propertiesList: any = [];
  priceList: any;
  rangeValues: number[] = [10000, 8000000];
  showAdvancedSearch = false;
  sizes = [
    { size: 'small' },
    { size: 'Medium' },
    { size: 'Large' },
    { size: 'Extra large' },
  ];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.page = history.state.page;

    this.getProperties();
  }

  getProperties() {
    this.getSub = this.apiService
      .get('data-properties')
      .subscribe((response) => {
        if (response?.data?.length > 0) {
          this.propertiesList = response?.data
            ?.filter((data: any) =>
              this.page == 'sale'
                ? data.property_purpose == 'S'
                : data.property_purpose == 'R'
            )
            ?.map((data: any) => {
              const newData = {
                ...data,
                propertyCategory:
                  data.property_purpose === 'S' ? 'Sale' : 'Rent',
                propertyImg: data?.images?.[0]?.photo_url,
                propertyType: data?.property_type?.prop_type_name,
              };
              return newData;
            });

          console.log('thi', this.propertiesList);
        } else {
        }
      });
  }

  toggleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  onCancel() {
    this.showAdvancedSearch = false;
  }

  onSubmit() {}

  whatsapp: any = [
    {
      img: 'assets/images/whatsapp.png',
    },
  ];

  imageHeader: any = {
    sale: {
      img: 'assets/images/propertiesForSaleImage.png',
      header: 'PROPERTIES FOR SALE',
    },
    rent: {
      img: 'assets/images/propertiesForRentImage.png',
      header: 'PROPERTIES FOR RENT',
    },
  };

  mainData: any = [
    {
      imageUrl: 'assets/images/HeaderLine2.png',
      header: 'PROPERTIES',
    },
  ];
  dialog: any = [
    {
      icon: 'assets/images/Img-plus.png',
      label1: 'LOCATIONS',
      label2: 'BEDROOMS',
      label3: 'TYPE',
      label4: 'SIZE',
      label5: 'BEDROOM',
      label6: 'PRICE RANGE',
      label8: 'BATHROOMS',
      label9: 'FEATURES',
      btn1: 'Advanced Search ',
      btn2: 'SEARCH',
      label7: 'CANCEL',
    },
  ];
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

  gridData: any = [
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property21.png',
      additionalLabel: 'NEW LAUNCH',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property29.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property17.png',
      additionalLabel: 'NEW LAUNCH',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property14.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property26.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property32.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property15.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property28.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property31.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property21.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property29.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property17.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property27.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property30.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property21.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property16.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property21.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property15.png',
      additionalLabel: 'NEW LAUNCH',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property21.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property16.png',
      additionalLabel: 'NEW LAUNCH',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
    {
      propertyCategory: 'SALE',
      btnLabel: 'MORE DETAILS',
      propertyImg: 'assets/images/property14.png',
      propertyName: 'Jumeirah',
      price: 'AED 990,000',
      iconImg1: 'assets/images/Icon-villa.png',
      iconImg2: 'assets/images/Icon-location.png',
      iconImg3: 'assets/images/Icon-bed.png',
      iconImg4: 'assets/images/Icon-sqfeet.png',
      propertyType: 'Villa',
      propertyLocation: 'Emirates Hills Villas',
      bedrooms: '3',
      propertySize: '5000 SQFT',
    },
  ];
  paginate(event: any) {
    event.first = 1;
    event.rows = 5;
    event.page = 2;
    event.pageCount = 10;
  }

  ngOnDestroy() {
    this.getSub.unsubscribe();
  }
}
