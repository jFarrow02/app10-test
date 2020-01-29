import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FilmsHttpService } from './films-http.service';
import { of } from 'rxjs';

describe('FilmsHttpService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let filmsHttpSrvc: FilmsHttpService;
  const MOCK_DATA = [ { title: 'The Force Woke Up' } ];
  const MOCK_URL = 'https://foo.bar/baz';

  beforeEach( () => {

    TestBed.configureTestingModule(
      {
        providers: [
          FilmsHttpService,
          { provide: HttpClient, useValue: httpClientSpy },
        ]
      }
    );  //end configureTestingModule
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    filmsHttpSrvc = new FilmsHttpService(<any>httpClientSpy)
  }); //end beforeEach

  it('should be created', () => {
    expect(filmsHttpSrvc).toBeTruthy();
  });

  it('should GET via http client', () => {
    httpClientSpy.get.and.returnValue( of( MOCK_DATA ) );

    filmsHttpSrvc.getFilmsByUrl(MOCK_URL)
      .subscribe(
        data => {
          expect( data ).toEqual( MOCK_DATA )
        }
      )
  })
});
