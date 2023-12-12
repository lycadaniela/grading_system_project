import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDashboardComponent } from './ad-dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdDashboardRoutingModule } from './ad-dashboard-routing.module';

@NgModule({
  declarations: [AdDashboardComponent],

  imports: [
    CommonModule,
    AdDashboardRoutingModule,
    ComponentsModule
  ]
})
export class AdDashboardModule { }
