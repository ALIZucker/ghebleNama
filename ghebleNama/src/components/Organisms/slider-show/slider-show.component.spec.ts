import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderShowComponent } from './slider-show.component';

describe('SliderShowComponent', () => {
  let component: SliderShowComponent;
  let fixture: ComponentFixture<SliderShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
