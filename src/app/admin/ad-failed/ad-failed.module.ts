import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdFailedComponent } from './ad-failed.component';
import { AdFailedRoutingModule } from './ad-failed-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [AdFailedComponent],
  imports: [
    CommonModule,
    AdFailedRoutingModule,
    ComponentsModule
  ]
})
export class AdFailedModule { }
