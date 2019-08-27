import { TestBed } from '@angular/core/testing';

import { UsersListingService } from './users-listing.service';

describe('UsersListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersListingService = TestBed.get(UsersListingService);
    expect(service).toBeTruthy();
  });
});
