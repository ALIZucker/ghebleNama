import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoNewsComponent } from './compo-news.component';

describe('CompoNewsComponent', () => {
  let component: CompoNewsComponent;
  let fixture: ComponentFixture<CompoNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompoNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
