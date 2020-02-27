import { TestBed } from '@angular/core/testing';

import { ConversorTemperaturaService } from './conversor-temperatura.service';

describe('ConversorTemperaturaService', () => {
  let service: ConversorTemperaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorTemperaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
