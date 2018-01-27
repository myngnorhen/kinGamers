import { TestBed, inject } from '@angular/core/testing';

import { ElementosCenaServiceService } from './elementos-cena-service.service';

describe('ElementosCenaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementosCenaServiceService]
    });
  });

  it('should be created', inject([ElementosCenaServiceService], (service: ElementosCenaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
