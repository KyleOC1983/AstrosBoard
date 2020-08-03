import { TestBed } from '@angular/core/testing';

import { PostsnthreadsService } from './postsnthreads.service';

describe('PostsnthreadsService', () => {
  let service: PostsnthreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsnthreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
