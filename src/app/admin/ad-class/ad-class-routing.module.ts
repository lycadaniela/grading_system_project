import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdClassComponent } from './ad-class.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdClassComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdClassRoutingModule { }
