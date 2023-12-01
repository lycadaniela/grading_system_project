import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:"",
    component: AdminComponent,

    children:[
      {
        path:"", redirectTo: "ad-dashboard", pathMatch:"prefix",
        
      },

      {
        path:"admin-dashboard",
        loadChildren:()=>import('./ad-dashboard/ad-dashboard.module').then(mod=>mod.AdDashboardModule)
      },

      {
        path:"admin-students",
        loadChildren:()=>import('./ad-students/ad-students.module').then(mod=>mod.AdStudentsModule)
      },

      {
        path:"admin-teachers",
        loadChildren:()=>import('./ad-teachers/ad-teachers.module').then(mod=>mod.AdTeachersModule)
      },

      {
        path:"admin-subject",
        loadChildren:()=>import('./ad-subjects/ad-subjects.module').then(mod=>mod.AdSubjectsModule)
      },

      {
        path:"admin-class",
        loadChildren:()=>import('./ad-class/ad-class.module').then(mod=>mod.AdClassModule)
      },

      {
        path:"admin-teachclass",
        loadChildren:()=>import('./ad-teachclass/ad-teachclass.module').then(mod=>mod.AdTeachclassModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
