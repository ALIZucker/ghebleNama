import { TestBed } from '@angular/core/testing';

import { DataBoundingService } from './data-bounding.service';

describe('DataBoundingService', () => {
  let service: DataBoundingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBoundingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
