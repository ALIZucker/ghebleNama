import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemRComponent } from './table-item-r.component';

describe('TableItemRComponent', () => {
  let component: TableItemRComponent;
  let fixture: ComponentFixture<TableItemRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableItemRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableItemRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
