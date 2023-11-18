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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
