import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", redirectTo: "login", pathMatch:"prefix",
    
  },

  {
    path: "",
    loadChildren: ()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },

  {
    path: "login",
    loadChildren: ()=>import('./login/login.module').then(mod=>mod.LoginModule)
  },

  {
    path: "",
    loadChildren: ()=>import('./teacher/teacher.module').then(mod=>mod.TeacherModule)
  },

  {
    path: "",
    loadChildren: ()=>import('./student/student.module').then(mod=>mod.StudentModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
