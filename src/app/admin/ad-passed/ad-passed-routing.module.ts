import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdPassedComponent } from './ad-passed.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdPassedComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdPassedRoutingModule { }
