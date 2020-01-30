import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JediListComponent } from './jedi-list/jedi-list.component';


const routes: Routes = [
  { component: JediListComponent, path: 'jedi' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JediRoutingModule { }
