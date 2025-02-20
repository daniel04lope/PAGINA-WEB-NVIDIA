import { TestBed } from '@angular/core/testing';

import { GpuInfoServiceService } from './gpu-info.service.service';

describe('GpuInfoServiceService', () => {
  let service: GpuInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpuInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
