import { TestBed } from '@angular/core/testing';

import { JediHttpService } from './jedi-http.service';

describe('JediHttpService', () => {
  
  let jediHttpSrvc: JediHttpService;

  beforeEach( () => {
    TestBed.configureTestingModule(
      {
        providers: [
          JediHttpService,
        ]
      }
    );  //end configureTestingModule()

    jediHttpSrvc = TestBed.get(JediHttpService);
  }); //end beforeEach()

  it('should create', () => {
    expect(jediHttpSrvc).toBeDefined();
  })
});
