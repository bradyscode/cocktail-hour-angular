import { TestBed } from '@angular/core/testing';

import { AddUserEmailService } from './add-user-email.service';

describe('AddUserEmailService', () => {
  let service: AddUserEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
