import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-popup',
  standalone: true,
  imports: [],
  templateUrl: './feedback-popup.component.html',
  styleUrl: './feedback-popup.component.scss'
})
export class FeedbackPopupComponent {
  isHovered: boolean = false;
  isHovered2: boolean = false;
}
