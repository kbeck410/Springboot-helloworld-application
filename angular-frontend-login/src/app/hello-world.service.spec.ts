import { TestBed } from '@angular/core/testing';

import { HelloWordService } from './hello-world.service';

describe('HelloWorldService', () => {
  let service: HelloWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
