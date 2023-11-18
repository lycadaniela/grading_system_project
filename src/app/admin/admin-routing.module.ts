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
        path:"", redirectTo: "dashboard", pathMatch:"prefix",
        
      },

      {
        path:"dashboard",
        loadChildren:()=>import('./ad-dashboard/ad-dashboard.module').then(mod=>mod.AdDashboardModule)
      },

      {
        path:"students",
        loadChildren:()=>import('./ad-students/ad-students.module').then(mod=>mod.AdStudentsModule)
      },

      {
        path:"teachers",
        loadChildren:()=>import('./ad-teachers/ad-teachers.module').then(mod=>mod.AdTeachersModule)
      },

      {
        path:"schoolyear",
        loadChildren:()=>import('./ad-schoolyear/ad-schoolyear.module').then(mod=>mod.AdSchoolyearModule)
      },

      {
        path:"subject",
        loadChildren:()=>import('./ad-subjects/ad-subjects.module').then(mod=>mod.AdSubjectsModule)
      },

      {
        path:"subjectlist",
        loadChildren:()=>import('./ad-subjectlist/ad-subjectlist.module').then(mod=>mod.AdSubjectlistModule)
      },

      {
        path:"grades",
        loadChildren:()=>import('./ad-grades/ad-grades.module').then(mod=>mod.AdGradesModule)
      },

      {
        path:"quiz",
        loadChildren:()=>import('./ad-quiz/ad-quiz.module').then(mod=>mod.AdQuizModule)
      },

      {
        path:"passed",
        loadChildren:()=>import('./ad-passed/ad-passed.module').then(mod=>mod.AdPassedModule)
      },

      {
        path:"failed",
        loadChildren:()=>import('./ad-failed/ad-failed.module').then(mod=>mod.AdFailedModule)
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
