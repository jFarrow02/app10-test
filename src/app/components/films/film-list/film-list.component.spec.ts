import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponent } from './film-list.component';
import { FilmsHttpService } from '../../../services/films/films-http.service';

describe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;
  let filmsHttpSrvc: { getFilmsByUrl: jasmine.Spy };

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
    component = fixture.componentInstance
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
