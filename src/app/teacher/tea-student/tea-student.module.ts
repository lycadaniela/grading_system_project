import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaStudentComponent } from './tea-student.component';
import { TeaStudentRoutingModule } from './tea-student-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeaStudentComponent],

  imports: [
    CommonModule,
    TeaStudentRoutingModule,
    ComponentsModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class TeaStudentModule { }
