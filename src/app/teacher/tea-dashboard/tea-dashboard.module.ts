import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaDashboardComponent } from './tea-dashboard.component';
import { TeaDashboardRoutingModule } from './tea-dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [TeaDashboardComponent],

  imports: [
    CommonModule,
    TeaDashboardRoutingModule,
    ComponentsModule
  ]
})
export class TeaDashboardModule { }
