import { TestBed } from '@angular/core/testing';

import { MainProductService } from './main-product.service';

describe('MainProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainProductService = TestBed.get(MainProductService);
    expect(service).toBeTruthy();
  });
});
