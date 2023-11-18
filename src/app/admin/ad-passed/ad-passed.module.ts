import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdPassedComponent } from './ad-passed.component';
import { AdPassedRoutingModule } from './ad-passed-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [AdPassedComponent],
  imports: [
    CommonModule,
    AdPassedRoutingModule,
    ComponentsModule
  ]
})
export class AdPassedModule { }
