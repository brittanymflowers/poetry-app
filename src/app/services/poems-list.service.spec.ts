import { TestBed } from '@angular/core/testing';

import { PoemsListService } from './poems-list.service';

describe('PoemsListService', () => {
  let service: PoemsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoemsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
