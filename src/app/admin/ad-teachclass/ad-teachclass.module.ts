import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdTeachclassComponent } from './ad-teachclass.component';
import { AdTeachclassRoutingModule } from './ad-teachclass-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [AdTeachclassComponent],

  imports: [
    CommonModule,
    AdTeachclassRoutingModule,
    ComponentsModule
  ]
})
export class AdTeachclassModule { }
