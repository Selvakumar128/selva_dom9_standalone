import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgxPaginationModule } from 'ngx-pagination';
import { Subscription } from 'rxjs';
import { ApiServiceService } from '../../../shared/services/api-service.service';
import { searchBar } from '../../../../assets/models/endpoint';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ButtonModule,DropdownModule,MultiSelectModule,CommonModule,NgxPaginationModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {
  constructor(private apiService: ApiServiceService){}
  getPropertyType: Subscription = new Subscription();
  getLocations:Subscription=new Subscription();
  whatsapp: any = [{img: 'assets/images/whatsapp.png'}];
  p: number = 1;
  location = [];
  propertyType = [];

  bedrooms = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
  ];

  completion = [
    {
      label: '2024',
      value: '2024',
    },
    {
      label: '2025',
      value: '2025',
    },
  ];

  headerSection = {
    image: 'assets/images/projectsHeaderImg.png',
    label: 'PROJECTS',
  };

  offplanData: any = [
    {
      list1: 'Price : ',
      list2: 'Bedrooms :',
      list3: 'Property Type : ',
      list4: 'Year of Completion: ',
      list5: 'Launch Date : ',
      btn: 'MORE DETAILS',
      community: 'Tilal Al Ghaf',
      imageUrl: 'assets/images/property4.png',
      header: 'RIVER FRONT RESIDENTS',
      para1: 'By KK Builders',
      para2:
        'This is a stunning 5-bedroom home, located on the side of the main lake of the Jumeirah Islands. The home has 14,000 square feet of garden facing the south.',
      price: 'From AED 2,00,000',
      bedrooms: ' 1 to 4 rooms',
      types: ' Apartment',
      completion: '2024',
      lDate: '(Feb 10th, 2024)',
    },
    {
      list1: 'Price : ',
      list2: 'Bedrooms :',
      list3: 'Property Type : ',
      list4: 'Year of Completion: ',
      list5: 'Launch Date : ',
      btn: 'MORE DETAILS',
      community: 'Dubai Maritime City',
      imageUrl: 'assets/images/property5.png',
      header: 'RIVER FRONT RESIDENTS',
      para1: 'By KK Builders',
      para2:
        'This is a stunning 5-bedroom home, located on the side of the main lake of the Jumeirah Islands. The home has 14,000 square feet of garden facing the south.',
      price: 'From AED 3,00,000',
      bedrooms: ' 1 to 3 rooms',
      types: 'Live Marina',
      completion: '2024',
      lDate: '(Feb 10th, 2024)',
    },
    {
      list1: 'Price : ',
      list2: 'Bedrooms :',
      list3: 'Property Type : ',
      list4: 'Year of Completion: ',
      list5: 'Launch Date : ',
      btn: 'MORE DETAILS',
      community: 'Tilal Al Ghaf',
      imageUrl: 'assets/images/property6.png',
      header: 'RIVER FRONT RESIDENTS',
      para1: 'By KK Builders',
      para2:
        'This is a stunning 5-bedroom home, located on the side of the main lake of the Jumeirah Islands. The home has 14,000 square feet of garden facing the south.',
      price: 'From AED 4,00,000',
      bedrooms: ' 1 to 5 rooms',
      types: 'Residency',
      completion: '2024',
      lDate: '(Feb 10th, 2024)',
    },
    {
      list1: 'Price : ',
      list2: 'Bedrooms :',
      list3: 'Property Type : ',
      list4: 'Year of Completion: ',
      list5: 'Launch Date : ',
      btn: 'MORE DETAILS',
      community: 'Al Wasi',
      imageUrl: 'assets/images/property7.png',
      header: 'RIVER FRONT RESIDENTS',
      para1: 'By KK Builders',
      para2:
        'This is a stunning 5-bedroom home, located on the side of the main lake of the Jumeirah Islands. The home has 14,000 square feet of garden facing the south.',
      price: 'From AED 3,00,000',
      bedrooms: ' 1 to 4 rooms',
      types: 'Jumeirah',
      completion: '2024',
      lDate: '(Feb 10th, 2024)',
    },
  ];

  ngOnInit(){
    this.getLocation();
    this. getPropertyTypes();
  }
  getLocation(){
    this.apiService.get(searchBar.getLocations).subscribe({
      next: (res: any) => {
        console.log('API Response:', res.results);
        this.location = res.results.map((item: any) => ({
          label: item.text,
          value: item.id,
        }));
      },
      error: (error) => {
        console.error('Error fetching team members:', error);
      },
    });
  }

  getPropertyTypes(){
    this.apiService.get(searchBar.getPropertyType).subscribe({
      next: (res: any) => {
        console.log('API Response:', res.results);
        this.propertyType = res.results;
        this.propertyType=res.results.map((item:any)=>({
          label: item.text,
          value: item.id,
        }))
      },
      error: (error) => {
        console.error('Error fetching team members:', error);
      },
    });
  }

  ngOnDestroy(): void {
    this.getPropertyType.unsubscribe();
    this.getLocations.unsubscribe();
  }

}
