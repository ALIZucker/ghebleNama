import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemLComponent } from './table-item-l.component';

describe('TableItemLComponent', () => {
  let component: TableItemLComponent;
  let fixture: ComponentFixture<TableItemLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableItemLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableItemLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
