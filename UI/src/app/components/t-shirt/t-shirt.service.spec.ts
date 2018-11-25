import { TestBed } from '@angular/core/testing';

import { TShirtService } from './t-shirt.service';

describe('TShirtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TShirtService = TestBed.get(TShirtService);
    expect(service).toBeTruthy();
  });
});
