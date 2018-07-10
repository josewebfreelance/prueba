import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewDataComponent} from "./view-data/view-data.component";
import {UpdateDataComponent} from "./update-data/update-data.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: ViewDataComponent
  },
  {
    path: 'update-ticket/:id',
    component: UpdateDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
