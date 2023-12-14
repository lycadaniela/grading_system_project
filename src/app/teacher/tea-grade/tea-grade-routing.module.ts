import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaGradeComponent } from './tea-grade.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:TeaGradeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaGradeRoutingModule { }
