import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaStudentComponent } from './tea-student.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:TeaStudentComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaStudentRoutingModule { }
