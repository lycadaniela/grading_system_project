import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdClassComponent } from './ad-class.component';
import { AdClassRoutingModule } from './ad-class-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdClassComponent],

  imports: [
    CommonModule,
    AdClassRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdClassModule { }
