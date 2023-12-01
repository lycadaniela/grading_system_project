import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdTeachclassComponent } from './ad-teachclass.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdTeachclassComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdTeachclassRoutingModule { }
