import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdTeachersComponent } from './ad-teachers.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdTeachersComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdTeachersRoutingModule { }
