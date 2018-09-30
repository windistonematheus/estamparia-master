import { TestBed, inject } from '@angular/core/testing';

import { CoutryService } from './coutry.service';

describe('CoutryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoutryService]
    });
  });

  it('should be created', inject([CoutryService], (service: CoutryService) => {
    expect(service).toBeTruthy();
  }));
});
