import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCompItemsComponent } from './news-comp-items.component';

describe('NewsCompItemsComponent', () => {
  let component: NewsCompItemsComponent;
  let fixture: ComponentFixture<NewsCompItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCompItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCompItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
