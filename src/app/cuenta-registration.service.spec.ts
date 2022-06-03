import { TestBed } from '@angular/core/testing';

import { CuentaRegistrationService } from './cuenta-registration.service';

describe('CuentaRegistrationService', () => {
  let service: CuentaRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
