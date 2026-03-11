import { TestBed } from '@angular/core/testing';

import { PlanetaryDataService } from './planetary-data.service';

describe('PlanetaryDataService', () => {
  let service: PlanetaryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetaryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
