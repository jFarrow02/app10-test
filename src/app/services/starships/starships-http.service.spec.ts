import { TestBed, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { StarshipsHttpService } from './starships-http.service';

describe('StarshipsHttpService', () => {

  let starshipHttpSrvc: StarshipsHttpService;
  let httpClientMock: { get: jasmine.Spy };

  beforeEach( async(
    () => {
      TestBed.configureTestingModule(
        {
          providers: [
            StarshipsHttpService,
            { provide: HttpClient, useValue: httpClientMock },
          ]
        }
      )
      
      httpClientMock = jasmine.createSpyObj('HttpClient', ['get'])
      starshipHttpSrvc = new StarshipsHttpService(<any>httpClientMock);
    }
  ));

  it('should be created', () => {
    expect(starshipHttpSrvc).toBeDefined();
  });
});
