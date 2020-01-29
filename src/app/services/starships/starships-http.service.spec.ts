import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StarshipsHttpService } from './starships-http.service';
import { Observable, defer, of } from 'rxjs'
describe('StarshipsHttpService', () => {

  let starshipHttpSrvc: StarshipsHttpService;
  let httpClientMock: { get: jasmine.Spy };
  const MOCK_URL = 'https://foo.bar/baz';
  const MOCK_DATA = [{name: 'Millenium Falchion'}];

  function asyncData<T>(data: T){
    return defer(()=>{
      return new Observable( subscriber => {
        subscriber.next(data);
        subscriber.complete();
      })
    })
  };

  function asyncError(err: any){
    return defer( ()=> {
      return new Observable( subscriber =>{
        subscriber.error(err);
      })
    })
  };

  

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

  it('should GET from an HTTP client (HAPPY PATH)', () => {
    httpClientMock.get.and.returnValue( asyncData(MOCK_DATA));

    starshipHttpSrvc.getStarshipsByUrl(MOCK_URL)
      .subscribe(
        data => {
          expect(data).toEqual(MOCK_DATA);
        }
      )
  });

  it('should GET from an HTTP client (SERVER ERROR HANDLING)', () => {
    const err: HttpErrorResponse = new HttpErrorResponse(
        {
          status: 404,
          error: 'Test 404 error'
        }
      );
    httpClientMock.get.and.returnValue(asyncError(err));
    starshipHttpSrvc.getStarshipsByUrl(MOCK_URL)
        .subscribe(
          done => fail('This request should fail'),
          error => {
            expect(error).toEqual('Server error. Please try request again later.');
          }
        )
  });

  it('should GET from an HTTP client (CLIENT ERROR HANDLING)', () => {
    //Or something could go wrong on the client-side such as
    //a network error that prevents the request from completing
    //successfully or an exception thrown in an RxJS operator.
    //These errors produce JavaScript ErrorEvent objects.
    
    const err: ErrorEvent = new ErrorEvent('Client Error', {message: 'This is a client error'});
    httpClientMock.get.and.returnValue(asyncError(err));
    starshipHttpSrvc.getStarshipsByUrl(MOCK_URL)
      .subscribe(
        done => fail('This request should fail'),
        error => {
          console.warn( error );
          expect(error).toEqual('This is a client error');
        }
      )
  })
});
