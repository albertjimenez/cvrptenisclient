import {inject, TestBed} from '@angular/core/testing';

import {StoreAndGenerateService} from './store-and-generate.service';

describe('StoreAndGenerateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreAndGenerateService]
    });
  });

  it('should be created', inject([StoreAndGenerateService], (service: StoreAndGenerateService) => {
    expect(service).toBeTruthy();
  }));
});
