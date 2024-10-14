import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverNgTextsComponent } from './adver-ng-texts.component';

describe('AdverNgTextsComponent', () => {
  let component: AdverNgTextsComponent;
  let fixture: ComponentFixture<AdverNgTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdverNgTextsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdverNgTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
