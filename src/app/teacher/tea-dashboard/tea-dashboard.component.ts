import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-tea-dashboard',
  templateUrl: './tea-dashboard.component.html',
  styleUrls: ['./tea-dashboard.component.scss']
})
export class TeaDashboardComponent implements OnInit {
  

  studentData: any[] = [];

  studentCount: number = 0;
  teacherCount: number = 0;
  classCount: number = 0;
  courseCount: number = 0;

  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private classService: ClassService,
    private courseService: CourseService,
    ) {}

  ngOnInit(): void {
    this.loadStudentData();
    this.loadTeacherData();
    this.loadClassData();
    this.loadCourseData();
  }

  loadStudentData(): void {
    this.studentService.getStudentData().subscribe(
      (data) => {
        console.log('Received student data:', data);
        this.studentData = data;
        this.studentCount = data.length; // Set the count based on the length of the array
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }

  loadTeacherData(): void {
    this.teacherService.getAllTeacher().subscribe(
      (data) => {
        console.log('Received student data:', data);
        this.teacherCount = data.length; // Set the count based on the length of the array
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }

  loadClassData(): void {
    this.classService.getAllClass().subscribe(
      (data) => {
        console.log('Received student data:', data);
        this.classCount = data.length; // Set the count based on the length of the array
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }

  loadCourseData(): void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        console.log('Received student data:', data);
        this.courseCount = data.length; // Set the count based on the length of the array
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }
  
}