import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';

import { StarshipListComponent } from './starship-list.component';
import { StarshipsHttpService } from '../../../services/starships/starships-http.service';

function asyncData<T>( data: T){
  return defer( ()=> new Observable( subscriber => {
    subscriber.next(data);
    subscriber.complete();
  }));
}

function asyncError( err: any ){
  return defer( () => new Observable( subscriber =>{
    subscriber.error(err);
  }))
}

describe('StarshipListComponent', () => {
  let starshipListComponent: StarshipListComponent;
  let fixture: ComponentFixture<StarshipListComponent>;
  let httpSrvcMock = jasmine.createSpyObj('StarshipsHttpService', ['getStarshipsByUrl']);
  const MOCK_DATA = {results: [{name: 'Milennium Falchion'}]};

  beforeEach( () => {

    TestBed.configureTestingModule(
      {
        declarations: [ StarshipListComponent ],
        providers: [
          {provide: StarshipsHttpService, useValue: httpSrvcMock },
        ]
      }
    );

    fixture = TestBed.createComponent(StarshipListComponent);
    starshipListComponent = fixture.componentInstance;
  }); //end beforeEach
  
  it('should create', () => {
    expect(starshipListComponent).toBeTruthy();
  });

  it('should GET using a starship http service onInit', ()=>{
    httpSrvcMock.getStarshipsByUrl.and.returnValue(asyncData(MOCK_DATA));
    fixture.detectChanges();
    expect(starshipListComponent['starshipsList']).toBeDefined();
  })
});
