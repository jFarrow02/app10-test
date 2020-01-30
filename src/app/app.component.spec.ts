import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

//Stub child components for cleaner unit test
@Component({selector: 'app-main-nav', template: ''})
class AppMainNavStub{}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStub{}

describe('AppComponent', () => {
  const TITLE = 'StarWarz';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        AppMainNavStub, //declare stubbed child components
        RouterOutletStub,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],  //ignore unknown child components
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'StarWarz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(TITLE);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain(TITLE);
  });
});
