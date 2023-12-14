import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeaNavbarComponent } from '../components/tea-navbar/tea-navbar.component';
import { TeaScreenComponent } from '../components/tea-screen/tea-screen.component';
import { TeaClassComponent } from './tea-class/tea-class.component';
import { TeaStudentComponent } from './tea-student/tea-student.component';
import { TeaGradeComponent } from './tea-grade/tea-grade.component';

@NgModule({
  declarations: [
    TeacherComponent,
    TeaNavbarComponent,
    TeaScreenComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    
  ]
})
export class TeacherModule { }
