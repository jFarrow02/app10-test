import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipListComponent } from './starship-list/starship-list.component';


const routes: Routes = [
  { component: StarshipListComponent, path: 'starships' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
