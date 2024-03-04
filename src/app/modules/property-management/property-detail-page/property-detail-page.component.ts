import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { TabViewModule } from 'primeng/tabview';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardModule } from 'primeng/card';

interface Size{
  size:string
}

interface Price {
  rate: string
}
interface Bed {
  bed: string,
}
interface Bath {
  bath: string,
}

@Component({
  selector: 'app-property-detail-page',
  standalone: true,
  imports: [DropdownModule,SliderModule,CommonModule,FormsModule,TabViewModule,NgxPaginationModule,ReactiveFormsModule,CardModule],
  templateUrl: './property-detail-page.component.html',
  styleUrl: './property-detail-page.component.scss'
})
export class PropertyDetailPageComponent {
  sizes: Size[];
  size: Size | any;
  beds: Bed[];
  bed: Bed | any;
  baths: Bath[];
  bathroom: Bath | any;
  rangeValues: number[] = [10000,8000000];

  prices: Price[];
  priceList: Price | any;
  
  constructor(private fb:FormBuilder){
    this.sizes =[
      {size:'small'},
      {size:'Medium'},
      // {size:'Large'},
      // {size:'Extra large'}
    ];
    this.baths = [
      {bath:'1'},
      {bath:'2'},
      // {bed:'3'},
      // {bed:'4'},
    ];
    this.beds = [
      {bed:'1'},
      {bed:'2'},
      // {bed:'3'},
      // {bed:'4'},
    ];
    this.prices = [
      {rate: 'Low'},
      {rate: 'Medium'},
      {rate: 'High'}
  ];
  }

  form=this.fb.group({
    location:['',Validators.required],
    bedroom:['',Validators.required,],
    bathroom:['',Validators.required,],
    type:['',Validators.required,],
    size:['',Validators.required,],
  });
 
  
  onSubmit(){
  }

  p: number = 1;
  whatsapp:any=[{
    "img":"assets/images/whatsapp.png"
  }]
  slider:any=[{
    "img":"assets/images/sliderImage6.png",
    "header":"PROPERTIES FOR RENT"
  }]
  mainData:any=[{
    "imageUrl":"assets/images/HeaderLine2.png",
    "header":"PROPERTIES"
  }]
  dialog:any=[{
    "icon":"assets/images/Img-plus.png",
    "label1":"LOCATIONS","label2":"SIZE","label3":"BATHROOM","label4":"BEDROOM",
    "label5":"PRICE RANGE",
    "btn1":"Advanced Search ","btn2":"SEARCH"
  }]
  gridData:any=[
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property21.png",
      subHead:"NEW LAUNCH",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property29.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property17.png",
      subHead:"NEW LAUNCH",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property14.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property26.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property32.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property15.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property28.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property31.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property21.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property29.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property17.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property27.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property30.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property21.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property16.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property21.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property15.png",
      subHead:"NEW LAUNCH",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property21.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property16.png",
      subHead:"NEW LAUNCH",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    },
    {
      saleBtn:"SALE",
      viewBtn:"VIEW",
      propImg:"assets/images/property14.png",
      header1:"Jumeirah",
      header2:"AED 990,000",
      iconImg1:"assets/images/Icon-villa.png",
      iconImg2:"assets/images/Icon-location.png",
      iconImg3:"assets/images/Icon-bed.png",
      iconImg4:"assets/images/Icon-sqfeet.png",
      iconHeader1:"Villa",
      iconHeader2:"Emirates Hills Villas",
      iconHeader3:"3",
      iconHeader4:"5000 SQFT",
    }
  ]
  paginate(event:any) {
    event.first = 1
    event.rows = 5
    event.page =2
    event.pageCount = 10
}
}
