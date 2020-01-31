import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediDetailsComponent } from './jedi-details.component';

describe('JediDetailsComponent', () => {
  let component: JediDetailsComponent;
  let fixture: ComponentFixture<JediDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JediDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JediDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
