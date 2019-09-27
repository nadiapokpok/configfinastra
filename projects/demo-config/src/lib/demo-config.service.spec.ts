import { TestBed } from '@angular/core/testing';

import { DemoConfigService } from './demo-config.service';

describe('DemoConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoConfigService = TestBed.get(DemoConfigService);
    expect(service).toBeTruthy();
  });
});
