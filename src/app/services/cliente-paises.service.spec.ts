import { TestBed } from '@angular/core/testing';

import { ClientePaisesService } from './cliente-paises.service';

describe('ClientePaisesService', () => {
  let service: ClientePaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientePaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
