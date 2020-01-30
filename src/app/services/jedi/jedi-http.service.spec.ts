import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { defer, Observable } from 'rxjs';

import { JediHttpService } from './jedi-http.service';

function asyncData<Data>( data: Data){
  return defer( ()=> new Observable( subscriber => {
    subscriber.next(data);
    subscriber.complete();
  }))
}

function asyncError(err: HttpErrorResponse ){
  return defer( ()=> new Observable( subscriber => {
    subscriber.error(err);
  }))
}
describe('JediHttpService', () => {
  
  let jediHttpSrvc: JediHttpService;
  let httpClientMock: { get: jasmine.Spy } = jasmine.createSpyObj('HttpClient', ['get']);
  const MOCK_URL = 'https://foo.bar/baz';
  const MOCK_DATA = [{name: 'Darth Serious'}];

  beforeEach( () => {
    TestBed.configureTestingModule(
      {
        providers: [
          JediHttpService,
          { provide: HttpClient, useValue: httpClientMock },
        ]
      }
    );  //end configureTestingModule()

    jediHttpSrvc = TestBed.get(JediHttpService);
  }); //end beforeEach()

  it('should create', () => {
    expect(jediHttpSrvc).toBeDefined();
  });

  it('should GET jedi from httpClient (HAPPY PATH)', ()=> {
    httpClientMock.get.and.returnValue(asyncData(MOCK_DATA));
    jediHttpSrvc.getJediByUrl(MOCK_URL)
      .subscribe(
        data => {
          expect(data).toEqual(MOCK_DATA);
        }
      )
  });

  it('should GET error message on CLIENT error', ()=>{
    const err: HttpErrorResponse = new HttpErrorResponse(
      {
        error: new ErrorEvent('CLIENT ERROR: STARSHIPS', {
          message: 'This is a client-side error.'}
          )
      }
    )
    httpClientMock.get.and.returnValue(asyncError(err));
    jediHttpSrvc.getJediByUrl(MOCK_URL)
      .subscribe(
        data => fail('Triggering a client-side error'),
        err => {
          //expect(err).toEqual(err.error.message);
          expect(err).toEqual('This is a client-side error.');
        }
      )
  });

  it('should GET error message on SERVER error', () => {
    const err = new HttpErrorResponse({status: 500});
    httpClientMock.get.and.returnValue(asyncError(err));
    jediHttpSrvc.getJediByUrl(MOCK_URL)
      .subscribe( 
        data => fail('This fails'),
        err => {
          expect(err).toEqual('Server error. Please try your request again later.');
        }
      )
  })
});
