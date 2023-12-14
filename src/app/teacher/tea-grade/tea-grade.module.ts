import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaGradeComponent } from './tea-grade.component';
import { TeaGradeRoutingModule } from './tea-grade-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeaGradeComponent],

  imports: [
    CommonModule,
    TeaGradeRoutingModule,
    ComponentsModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class TeaGradeModule { }
