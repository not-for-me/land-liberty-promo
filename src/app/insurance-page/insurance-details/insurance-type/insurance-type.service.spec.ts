/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InsuranceTypeService } from './insurance-type.service';

describe('InsuranceTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsuranceTypeService]
    });
  });

  it('should ...', inject([InsuranceTypeService], (service: InsuranceTypeService) => {
    expect(service).toBeTruthy();
  }));
});
