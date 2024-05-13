import { TestBed } from '@angular/core/testing';

import { IrparakuoService } from './irparakuo.service';

describe('IrparakuoService', () => {
  let service: IrparakuoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrparakuoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
