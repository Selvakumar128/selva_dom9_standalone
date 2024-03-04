import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/models/data.json';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  aboutData: any = (data as any).default.Aboutus;

  constructor(){}
  ngOnInit(){
     console.log(this.aboutData);
  }
}
