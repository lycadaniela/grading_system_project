import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdStudentsComponent } from './ad-students.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdStudentsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdStudentsRoutingModule { }
