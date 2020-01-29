import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipListComponent } from './starship-list/starship-list.component';


@NgModule({
  declarations: [StarshipListComponent],
  imports: [
    CommonModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }
