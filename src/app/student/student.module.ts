import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { StuNavbarComponent } from '../components/stu-navbar/stu-navbar.component';
import { StuScreenComponent } from '../components/stu-screen/stu-screen.component';

@NgModule({
  declarations: [
    StudentComponent,
    StuNavbarComponent,
    StuScreenComponent,
    
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    
  ]
})
export class StudentModule { }
