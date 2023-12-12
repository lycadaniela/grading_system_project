import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuScoreComponent } from './stu-score.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:StuScoreComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuScoreRoutingModule { }
