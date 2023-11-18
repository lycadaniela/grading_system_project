import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdTeachersRoutingModule } from './ad-teachers-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdTeachersComponent } from './ad-teachers.component';



@NgModule({
  declarations: [AdTeachersComponent],
  imports: [
    CommonModule,
    AdTeachersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdTeachersModule { }
