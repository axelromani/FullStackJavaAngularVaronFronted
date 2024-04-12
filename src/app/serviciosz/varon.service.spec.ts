import { TestBed } from '@angular/core/testing';

import { VaronService } from './varon.service';

describe('VaronService', () => {
  let service: VaronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
