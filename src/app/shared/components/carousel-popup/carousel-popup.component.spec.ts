import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPopupComponent } from './carousel-popup.component';

describe('CarouselPopupComponent', () => {
  let component: CarouselPopupComponent;
  let fixture: ComponentFixture<CarouselPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
