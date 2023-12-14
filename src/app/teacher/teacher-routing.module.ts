import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:"",
    component: TeacherComponent,

    children:[
      {
        path:"", redirectTo: "stu-dashboard", pathMatch:"prefix",
        
      },

      {
        path:"teacher-dashboard",
        loadChildren:()=>import('./tea-dashboard/tea-dashboard.module').then(mod=>mod.TeaDashboardModule)
      },

      {
        path:"teacher-class",
        loadChildren:()=>import('./tea-class/tea-class.module').then(mod=>mod.TeaClassModule)
      },

      {
        path:"teacher-student",
        loadChildren:()=>import('./tea-student/tea-student.module').then(mod=>mod.TeaStudentModule)
      },

      {
        path:"teacher-grade",
        loadChildren:()=>import('./tea-grade/tea-grade.module').then(mod=>mod.TeaGradeModule)
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
