import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCategoryComponent } from './start-category.component';

describe('StartCategoryComponent', () => {
  let component: StartCategoryComponent;
  let fixture: ComponentFixture<StartCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
