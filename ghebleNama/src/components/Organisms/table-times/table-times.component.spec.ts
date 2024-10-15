import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTimesComponent } from './table-times.component';

describe('TableTimesComponent', () => {
  let component: TableTimesComponent;
  let fixture: ComponentFixture<TableTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTimesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
