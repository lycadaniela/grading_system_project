import { TestBed } from '@angular/core/testing';

import { AdStudentsService } from './ad-students.service';

describe('AdStudentsService', () => {
  let service: AdStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
