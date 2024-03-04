import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-carousel-popup',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel-popup.component.html',
  styleUrl: './carousel-popup.component.scss'
})
export class CarouselPopupComponent {
  selectedImage: any;
  imgCollection: any[]=[];
  itemsPerSlide=1;
  interval=2000;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    // Access data passed from the parent component
    this.selectedImage = this.config.data.selectedImage;
    this.imgCollection = this.config.data.imgCollection;
    
  }
}
