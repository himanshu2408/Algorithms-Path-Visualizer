import { TestBed } from '@angular/core/testing';

import { AlgorithmsService } from './algorithms.service';

describe('AlgorithmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlgorithmsService = TestBed.get(AlgorithmsService);
    expect(service).toBeTruthy();
  });
});
