import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuDashboardComponent } from './stu-dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:StuDashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuDashboardRoutingModule { }
