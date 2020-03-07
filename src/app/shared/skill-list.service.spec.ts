import { TestBed } from '@angular/core/testing';

import { SkillListService } from './skill-list.service';

describe('SkillListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillListService = TestBed.get(SkillListService);
    expect(service).toBeTruthy();
  });
});
