import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediDetailsComponent } from './jedi-details.component';
import { By } from '@angular/platform-browser';

describe('JediDetailsComponent', () => {
  let component: JediDetailsComponent;
  let fixture: ComponentFixture<JediDetailsComponent>;
  let debugEl;
  let jediEl;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JediDetailsComponent ]
    })
    
    fixture = TestBed.createComponent(JediDetailsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('.jedi-details>h4'))
    jediEl = debugEl.nativeElement;
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(JediDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
