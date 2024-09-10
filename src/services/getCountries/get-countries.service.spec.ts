import { TestBed } from '@angular/core/testing';

import { CountriesService } from './get-countries.service';

describe('GetCountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
