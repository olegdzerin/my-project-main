import { TestBed } from '@angular/core/testing';

import { AdminSecondService } from './admin-second.service';

describe('AdminSecondService', () => {
  let service: AdminSecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
