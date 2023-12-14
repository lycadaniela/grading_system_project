import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaClassComponent } from './tea-class.component';
import { TeaClassRoutingModule } from './tea-class-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [TeaClassComponent],

  imports: [
    CommonModule,
    TeaClassRoutingModule,
    ComponentsModule
  ]
})
export class TeaClassModule { }
