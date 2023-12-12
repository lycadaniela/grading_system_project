import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuClassComponent } from './stu-class.component';
import { StuClassRoutingModule } from './stu-class-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [StuClassComponent],

  imports: [
    CommonModule,
    StuClassRoutingModule,
    ComponentsModule
  ]
})
export class StuClassModule { }
