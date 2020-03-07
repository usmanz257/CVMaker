import { TestBed } from '@angular/core/testing';

import { ResumeDataServiceService } from './resume-data-service.service';

describe('ResumeDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeDataServiceService = TestBed.get(ResumeDataServiceService);
    expect(service).toBeTruthy();
  });
});
