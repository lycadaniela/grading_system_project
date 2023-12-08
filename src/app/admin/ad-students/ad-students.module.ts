import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdStudentsComponent } from './ad-students.component';
import { AdStudentsRoutingModule } from './ad-students-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdStudentsComponent],
  
  imports: [
    CommonModule,
    AdStudentsRoutingModule,
    FormsModule, 
    ReactiveFormsModule
    
  ]
})
export class AdStudentsModule { }
