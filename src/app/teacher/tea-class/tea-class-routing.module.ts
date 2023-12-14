import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaClassComponent } from './tea-class.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:TeaClassComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaClassRoutingModule { }
