import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdFailedComponent } from './ad-failed.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdFailedComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdFailedRoutingModule { }
