import { TestBed } from '@angular/core/testing';

import { SelectedPoemService } from './selected-poem.service';

describe('SelectedPoemService', () => {
  let service: SelectedPoemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedPoemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
