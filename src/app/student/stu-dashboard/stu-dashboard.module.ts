import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuDashboardComponent } from './stu-dashboard.component';
import { StuDashboardRoutingModule } from './stu-dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { StudentRoutingModule } from '../student-routing.module';

@NgModule({
  declarations: [StuDashboardComponent],

  imports: [
    CommonModule,
    StuDashboardRoutingModule,
    ComponentsModule
  ]
})
export class StuDashboardModule { }
