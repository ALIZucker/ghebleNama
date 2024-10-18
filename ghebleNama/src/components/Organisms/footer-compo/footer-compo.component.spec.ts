import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCompoComponent } from './footer-compo.component';

describe('FooterCompoComponent', () => {
  let component: FooterCompoComponent;
  let fixture: ComponentFixture<FooterCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
