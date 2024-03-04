import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footer: any = [
    {
      header: 'assets/icons/Logo.svg',
      icon1: 'assets/icons/Facebook.svg',
      icon2: 'assets/icons/Twitter.svg',
      icon3: 'assets/icons/Instagram.svg',
      icon4: 'assets/icons/Telegram.svg',
      icon5: 'assets/icons/Youtube.svg',
      para: ' All the apartments also come with at least one outdoor balcony, so that residents can experience the beauty of being flanked by a green park and tranquil waterfront, as well as the temperate climate of the UAE.',
      listHeader1: 'Company',
      listHeader2: 'Contact us',
      l1: 'About Us',
      l2: 'Projects',
      l3: 'Partners Program',
      l4: 'List Your Property',
      phone: '+916379693672',
      email: 'dom9@gmail.com',
      address: 'Bur Dubai, Dubai',
      cpr1: 'Terms and Conditions | ',
      cpr2: '2023 Copyright. All rights reserved',
      phoneimg: 'assets/images/Img-mobile-footer.png',
      emailimg: 'assets/images/Img-email-footer.png',
      locationimg: 'assets/images/Img-location-footer.png',
    },
  ];
}
