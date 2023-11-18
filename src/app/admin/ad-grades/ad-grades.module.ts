import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdGradesComponent } from './ad-grades.component';
import { AdGradesRoutingModule } from './ad-grades-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdGradesComponent],
  imports: [
    CommonModule,
    AdGradesRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class AdGradesModule { }
