import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FilmsHttpService } from './films-http.service';
import { of, Observable } from 'rxjs';

import { defer } from 'rxjs';
export function asyncData<T>(data: T) {
   return defer(() => new Observable( subscriber => {
     subscriber.next( data );
     subscriber.complete();
   }));
}
// export function asyncError(error: any) {
//    return defer(() => Promise.reject(error));
// }
export function asyncError(error: any) {
  return defer(() => new Observable(subscriber =>{
    subscriber.error( error );
  }));
}

describe('FilmsHttpService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let filmsHttpSrvc: FilmsHttpService;
  const MOCK_DATA = [ { title: 'The Force Woke Up' } ];
  const MOCK_URL = 'https://foo.bar/baz';

  beforeEach( async(() => {

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
  })); //end beforeEach

  it('should be created', () => {
    expect(filmsHttpSrvc).toBeTruthy();
  });

  it('should GET via http client (HAPPY PATH)', () => {
    httpClientSpy.get.and.returnValue( asyncData( MOCK_DATA ) );

    filmsHttpSrvc.getFilmsByUrl( MOCK_URL )
      .subscribe(
        data => {
          expect( data ).toEqual( MOCK_DATA )
        }
      )
  });

  it('should GET via http client (ERROR HANDLING)', () => {
    const errResponse = new HttpErrorResponse(
      { error: 'Test 404 err', status: 404 }
    )
    httpClientSpy.get.and.returnValue( asyncError(errResponse) );

    filmsHttpSrvc.getFilmsByUrl( MOCK_URL )
      .subscribe(
        done => fail( 'Expecting 404 response from server' ),
        ( error ) => {
          expect( error ).toEqual( 'Error processing this request. Please try again later.' );
        }
      )
  });
});
