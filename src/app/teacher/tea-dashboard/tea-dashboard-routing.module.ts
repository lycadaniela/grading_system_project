import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaDashboardComponent } from './tea-dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:TeaDashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaDashboardRoutingModule { }
