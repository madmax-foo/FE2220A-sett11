import { TestBed } from '@angular/core/testing';

import { ProdottiService } from './services/product.service';

describe('ProdottiService', () => {
  let service: ProdottiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
