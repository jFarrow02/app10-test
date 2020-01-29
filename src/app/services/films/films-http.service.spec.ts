import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FilmsHttpService } from './films-http.service';

describe('FilmsHttpService', () => {
  let httpClientSpy: jasmine.Spy;
  let filmsHttpSrvc: FilmsHttpService;

  beforeEach( () => {

    TestBed.configureTestingModule(
      {
        
      }
    );  //end configureTestingModule
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    filmsHttpSrvc = new FilmsHttpService(<any>httpClientSpy)
  }); //end beforeEach

  it('should be created', () => {
    expect(filmsHttpSrvc).toBeTruthy();
  });
});
