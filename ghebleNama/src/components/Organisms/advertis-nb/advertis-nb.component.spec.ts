import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisNBComponent } from './advertis-nb.component';

describe('AdvertisNBComponent', () => {
  let component: AdvertisNBComponent;
  let fixture: ComponentFixture<AdvertisNBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisNBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertisNBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
