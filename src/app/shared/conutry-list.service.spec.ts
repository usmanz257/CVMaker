import { TestBed } from '@angular/core/testing';

import { ConutryListService } from './conutry-list.service';

describe('ConutryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConutryListService = TestBed.get(ConutryListService);
    expect(service).toBeTruthy();
  });
});
