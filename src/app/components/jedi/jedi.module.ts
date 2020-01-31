import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JediRoutingModule } from './jedi-routing.module';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { JediDetailsComponent } from './jedi-details/jedi-details.component';


@NgModule({
  declarations: [JediListComponent, JediDetailsComponent],
  imports: [
    CommonModule,
    JediRoutingModule
  ]
})
export class JediModule { }
