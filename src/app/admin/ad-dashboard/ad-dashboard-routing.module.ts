import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDashboardComponent } from './ad-dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdDashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdDashboardRoutingModule { }
