import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { defer, Observable } from 'rxjs';
import { HttpReqService } from './http-req.service';
import { Data } from '@angular/router';

function asyncData<Data>(data: Data){
  return defer( ()=>{
    return new Observable( subscriber => {
      subscriber.next();
      subscriber.complete();
    })
  })
}

describe('HttpReqService', () => {
  let httpReqSrvc: HttpReqService;
  let httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
  const MOCK_DATA = [{quote: 'May the Force be with you'}];
  const MOCK_URL = 'http://foo.bar/baz';

  beforeEach( () => {
    TestBed.configureTestingModule(
      {
        declarations: [
          HttpReqService
        ],
        providers: [
          HttpReqService,
          {provide: HttpClient, useValue: httpClientMock},
        ]
      }
    )

    httpReqSrvc = new HttpReqService(<any>httpClientMock);
  }); //end beforeEach

  it('should create', () => {
    expect(httpReqSrvc).toBeDefined();
  });
  
  it('should GET via httpClient', () => {
    httpClientMock.get.and.returnValue(asyncData(MOCK_DATA));

    httpReqSrvc.get(MOCK_URL)
      .subscribe(
        data => {
          expect(data).toEqual(MOCK_DATA);
        }
      )
  })
});
