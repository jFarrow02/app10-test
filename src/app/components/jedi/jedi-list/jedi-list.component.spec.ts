import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { JediListComponent } from './jedi-list.component';
import { PaginationService } from '../../../services/pagination/pagination.service';
import { DataCacheService } from '../../../services/cache/data-cache.service';

@Component({selector: 'app-jedi-details', template: ''}) class JediDetailsMock{}

describe('JediListComponent', () => {
  let component: JediListComponent;
  let fixture: ComponentFixture<JediListComponent>;
  let httpClient = jasmine.createSpyObj('HttpClient', ['get']);
  let cacheSrvc = jasmine.createSpyObj('DataCacheService', ['addToJediCache', 'getJediCache', 'clearJediCache']);
  let pageSrvc = jasmine.createSpyObj('PaginationService', ['paginate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        JediListComponent,
        JediDetailsMock,
      ],
      providers: [
        {provide: HttpClient, useValue: httpClient},
        {provide: PaginationService, useValue: pageSrvc},
        {provide: DataCacheService, useValue: cacheSrvc},
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    });

    fixture = TestBed.createComponent(JediListComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
