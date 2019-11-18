import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get/get.component'
import { EditComponent } from './edit/edit.component'

const routes: Routes = [
  {
    path: 'get',
    component: GetComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
