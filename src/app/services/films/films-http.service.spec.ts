import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FilmsHttpService } from './films-http.service';
import { Observable } from 'rxjs';

import { defer } from 'rxjs';

// The RxJS defer() operator returns an observable. It takes a factory function
//that returns either a promise or an observable. When something subscribes to defer's 
//observable, it adds the subscriber to a new observable created with that factory.
//The defer() operator transforms the Promise.resolve() into a new observable that, 
//like HttpClient, emits once and completes. Subscribers are unsubscribed after they receive the data value.
//There's a similar helper for producing an async error.

export function asyncData<T>(data: T) {
   return defer(() => new Observable( subscriber => {
     subscriber.next( data );
     subscriber.complete();
   }));
}
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

  it('should GET via http client (ERROR CLIENT SIDE)', () => {
    const errResponse = new ErrorEvent('Test Error', {message: 'This is an error event'});

    httpClientSpy.get.and.returnValue( defer(()=>{
      throw errResponse;
    }));
    
    filmsHttpSrvc.getFilmsByUrl( MOCK_URL )
      .subscribe(
        done => fail('Throwing an error on client side' ),
        ( err ) => {
          console.log( 'CLIENT SIDE ERR: ', err );
          expect(err).toEqual('This is an error event');
        }
      )
  })
});
