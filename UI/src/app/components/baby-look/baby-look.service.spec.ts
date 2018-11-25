import { TestBed } from '@angular/core/testing';

import { BabyLookService } from './baby-look.service';

describe('BabyLookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BabyLookService = TestBed.get(BabyLookService);
    expect(service).toBeTruthy();
  });
});
