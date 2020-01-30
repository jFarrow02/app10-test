import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JediRoutingModule } from './jedi-routing.module';
import { JediListComponent } from './jedi-list/jedi-list.component';


@NgModule({
  declarations: [JediListComponent],
  imports: [
    CommonModule,
    JediRoutingModule
  ]
})
export class JediModule { }
