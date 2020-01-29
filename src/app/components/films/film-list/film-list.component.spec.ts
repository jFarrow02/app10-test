import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponent } from './film-list.component';
import { FilmsHttpService } from '../../../services/films/films-http.service';
import { defer, Observable, of } from 'rxjs';

function asyncData<Data>(data: Data){
  return defer(()=>{
    return new Observable( subscriber => {
      subscriber.next(data);
      subscriber.complete;
    })
  })
}
describe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;
  //Initialize the service IMMEDIATELY
  let filmsHttpSrvc = jasmine.createSpyObj('FilmsHttpService', ['getFilmsByUrl']);
  const MOCK_FILMS = {results: [{title: 'The Force Woke Up'}]};

  beforeEach(async(() => {
   
    TestBed.configureTestingModule(
      {
        declarations: [ FilmListComponent ],
        providers: [
          {provide: FilmsHttpService, useValue: filmsHttpSrvc},
        ],
      }
    );

    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    //Setting up mock methods to return values must be done INSIDE beforeEach() 
    //(fails if tried in assertion[?])
    filmsHttpSrvc.getFilmsByUrl.and.returnValue(asyncData(MOCK_FILMS));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of jedi onInit', () => {
    fixture.detectChanges();
    expect(component['filmsList']).toBeDefined();
    expect(component.filmsList[0]['title']).toEqual('The Force Woke Up')
  })
});
