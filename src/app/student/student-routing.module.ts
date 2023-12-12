import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';

const routes : Routes = [
  {
    path:"",
    component: StudentComponent,

    children:[
      {
        path:"", redirectTo: "stu-dashboard", pathMatch:"prefix",
        
      },

      {
        path:"student-dashboard",
        loadChildren:()=>import('./stu-dashboard/stu-dashboard.module').then(mod=>mod.StuDashboardModule)
      },

      {
        path:"student-class",
        loadChildren:()=>import('./stu-class/stu-class.module').then(mod=>mod.StuClassModule)
      },

      {
        path:"student-score",
        loadChildren:()=>import('./stu-score/stu-score.module').then(mod=>mod.StuScoreModule)
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
