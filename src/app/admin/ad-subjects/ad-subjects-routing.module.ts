import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdSubjectsComponent } from './ad-subjects.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdSubjectsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdSubjectsRoutingModule { }
