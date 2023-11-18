import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdQuizComponent } from './ad-quiz.component';
import { AdQuizRoutingModule } from './ad-quiz-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [AdQuizComponent],
  imports: [
    CommonModule,
    AdQuizRoutingModule,
    ComponentsModule
  ]
})
export class AdQuizModule { }
