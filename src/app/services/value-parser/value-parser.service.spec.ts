import { TestBed } from '@angular/core/testing';

import { ValueParserService } from './value-parser.service';

describe('ValueParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValueParserService = TestBed.get(ValueParserService);
    expect(service).toBeTruthy();
  });
});
