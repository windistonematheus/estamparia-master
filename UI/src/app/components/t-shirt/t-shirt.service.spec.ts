import { TestBed } from '@angular/core/testing';

import { TshirtService } from './t-shirt.service';

describe('TShirtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TshirtService = TestBed.get(TshirtService);
    expect(service).toBeTruthy();
  });
});
