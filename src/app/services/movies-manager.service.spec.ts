import { TestBed } from '@angular/core/testing';

import { MoviesManagerService } from './movies-manager.service';

describe('MoviesManagerService', () => {
  let service: MoviesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
