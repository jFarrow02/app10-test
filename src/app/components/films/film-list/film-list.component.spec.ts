import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponent } from './film-list.component';
import { HttpReqService } from '../../../services/http/http-req.service';
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
  let httpReqSrvc = jasmine.createSpyObj('HttpReqService', ['get']);
  const MOCK_FILMS = {results: [{title: 'The Force Woke Up', url: 'https://film/99'}]};
  const getSpy = httpReqSrvc.get.and.returnValue(asyncData(MOCK_FILMS));

  beforeEach(async(() => {
   
    TestBed.configureTestingModule(
      {
        declarations: [ FilmListComponent ],
        providers: [
          {provide: HttpReqService, useValue: httpReqSrvc},
        ],
      }
    );

    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of jedi onInit', () => {
    fixture.detectChanges();
    let a = fixture.nativeElement.querySelector('.films__film-list-item>a:first-of-type');
    expect(a.textContent).toBe('https://film/99');
    expect(getSpy.calls.any()).toBe(true);
  });

  it('should set a title', () => {
    fixture.detectChanges();
    expect(component.title).toEqual('Films');
  })
});
