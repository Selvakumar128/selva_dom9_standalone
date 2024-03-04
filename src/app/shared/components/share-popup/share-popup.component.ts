import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-share-popup',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './share-popup.component.html',
  styleUrl: './share-popup.component.scss'
})
export class SharePopupComponent {
  @ViewChild('linkInput') linkInput!: ElementRef<HTMLInputElement>;
  socialIcons = {
    socialicon1: 'assets/icons/facebookBrown.svg',
    socialicon2: 'assets/icons/twitterBrown.svg',
    socialicon3: 'assets/icons/instagramBrown.svg',
    socialicon4: 'assets/icons/telegramBrown.svg',
    socialicon5: 'assets/icons/youtubeBrown.svg',
  };

  configData: any;

  constructor(private config: DynamicDialogConfig) {}

  ngOnInit() {
    this.configData = this.config?.data;
  }

  ngAfterViewInit(): void {
    if (this.linkInput && this.linkInput.nativeElement) {
      this.linkInput.nativeElement.value =
        this.config?.data?.cppyLink ?? 'Property Link';
    }
  }

  copyText() {
    navigator.clipboard.writeText(this.linkInput.nativeElement.value);
  }
}
