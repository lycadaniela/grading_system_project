import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdSchoolyearComponent } from './ad-schoolyear.component';
import { AdSchoolyearRoutingModule } from './ad-schoolyear-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [AdSchoolyearComponent],
  imports: [
    CommonModule,
    AdSchoolyearRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdSchoolyearModule { }
