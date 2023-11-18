import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdSubjectsComponent } from './ad-subjects.component';
import { AdSubjectsRoutingModule } from './ad-subjects-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdSubjectsComponent],
  imports: [
    CommonModule,
    AdSubjectsRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdSubjectsModule { }
