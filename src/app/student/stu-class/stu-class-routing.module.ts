import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuClassComponent } from './stu-class.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:StuClassComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuClassRoutingModule { }
