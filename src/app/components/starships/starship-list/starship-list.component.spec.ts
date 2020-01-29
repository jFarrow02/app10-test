import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipListComponent } from './starship-list.component';

describe('StarshipListComponent', () => {
  let starshipListComponent: StarshipListComponent;
  let fixture: ComponentFixture<StarshipListComponent>;

  beforeEach( () => {

    TestBed.configureTestingModule(
      {
        declarations: [ StarshipListComponent ],
      }
    );

    fixture = TestBed.createComponent(StarshipListComponent);
    starshipListComponent = fixture.componentInstance;
  }); //end beforeEach
  
  it('should create', () => {
    expect(starshipListComponent).toBeTruthy();
  });
});
