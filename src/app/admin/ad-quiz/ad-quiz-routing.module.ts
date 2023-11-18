import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdQuizComponent } from './ad-quiz.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path:'', component:AdQuizComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdQuizRoutingModule { }
