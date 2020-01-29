import { TestBed } from '@angular/core/testing';

import { StarshipsHttpService } from './starships-http.service';

describe('StarshipsHttpService', () => {

  let starshipHttpSrvc: StarshipsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {

      }
    )

    starshipHttpSrvc = new StarshipsHttpService();
  });

  it('should be created', () => {
    expect(starshipHttpSrvc).toBeDefined();
  });
});
