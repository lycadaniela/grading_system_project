import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdSubjectlistComponent } from './ad-subjectlist.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdSubjectlistComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdSubjectlistRoutingModule { }
