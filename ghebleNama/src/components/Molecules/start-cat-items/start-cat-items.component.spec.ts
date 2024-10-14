import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCatItemsComponent } from './start-cat-items.component';

describe('StartCatItemsComponent', () => {
  let component: StartCatItemsComponent;
  let fixture: ComponentFixture<StartCatItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartCatItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartCatItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
