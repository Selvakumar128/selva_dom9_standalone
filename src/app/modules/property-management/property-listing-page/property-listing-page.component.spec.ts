import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingPageComponent } from './property-listing-page.component';

describe('PropertyListingPageComponent', () => {
  let component: PropertyListingPageComponent;
  let fixture: ComponentFixture<PropertyListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyListingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
