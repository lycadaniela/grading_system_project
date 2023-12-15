import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-stu-class',
  templateUrl: './stu-class.component.html',
  styleUrls: ['./stu-class.component.scss']
})
export class StuClassComponent implements OnInit {

  students: any[] = []; // Assuming you have a Student interface or type
  selectedRecord: any | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.fetchStudents(); // Call the method to fetch students from your service
  }

  fetchStudents() {
    this.studentService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  selectStudent(student: any): void {
    this.selectedRecord = student;
  }
}

