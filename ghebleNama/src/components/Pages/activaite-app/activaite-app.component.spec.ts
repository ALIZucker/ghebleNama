import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivaiteAppComponent } from './activaite-app.component';

describe('ActivaiteAppComponent', () => {
  let component: ActivaiteAppComponent;
  let fixture: ComponentFixture<ActivaiteAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivaiteAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivaiteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
