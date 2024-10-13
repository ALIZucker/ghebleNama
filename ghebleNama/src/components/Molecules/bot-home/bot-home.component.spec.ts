import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotHomeComponent } from './bot-home.component';

describe('BotHomeComponent', () => {
  let component: BotHomeComponent;
  let fixture: ComponentFixture<BotHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
