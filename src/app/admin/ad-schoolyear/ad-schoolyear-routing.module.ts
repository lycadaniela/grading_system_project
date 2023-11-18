import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdSchoolyearComponent } from './ad-schoolyear.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdSchoolyearComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdSchoolyearRoutingModule { }
