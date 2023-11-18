import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdGradesComponent } from './ad-grades.component';
import { Routes, RouterModule } from '@angular/router';



const routes : Routes = [
  {
    path:'', component:AdGradesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdGradesRoutingModule { }
