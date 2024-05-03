import { TestBed } from '@angular/core/testing';

import { YsqrService } from './ysqr.service';

describe('YsqrService', () => {
  let service: YsqrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YsqrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
