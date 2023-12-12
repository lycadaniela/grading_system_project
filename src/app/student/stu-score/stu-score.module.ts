import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuScoreComponent } from './stu-score.component';
import { StuScoreRoutingModule } from './stu-score-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [StuScoreComponent],

  imports: [
    CommonModule,
    StuScoreRoutingModule,
    ComponentsModule
  ]
})
export class StuScoreModule { }
