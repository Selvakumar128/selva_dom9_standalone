import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { searchBar } from '../../../../assets/models/endpoint';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,MultiSelectModule,DropdownModule,SliderModule,ButtonModule,CheckboxModule,RadioButtonModule,CommonModule,],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private apiService: ApiServiceService){}
  getPropertyType: Subscription = new Subscription();
  getLocations:Subscription=new Subscription();
  features: string[] = [];
  bathroomValue: any;
  showAdvancedSearch = false;
  location = [];
  propertyType = [];
  rangeValues: number[] = [10000, 8000000];
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
 
  minSize = [
    { label: '100 sqft', value: '100 sqft' },
    { label: '200 sqft', value: '200 sqft' },
    { label: '300sqft', value: '' },
  ];

  ngOnInit(){
    this.getLocation();
    this. getPropertyTypes();
  }

  toggleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  onCancel() {
    this.showAdvancedSearch = false;
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
