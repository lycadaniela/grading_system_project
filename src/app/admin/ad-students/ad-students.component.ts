import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/shared_data/student';

@Component({
  selector: 'app-ad-students',
  templateUrl: './ad-students.component.html',
  styleUrls: ['./ad-students.component.scss']
})
export class AdStudentsComponent implements OnInit {
  
  students: Student[] = [];
  showAddStudentSection = true;
  showStudentRecordsSection = false;
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize students if needed
  }

  toggleSections() {
    this.showAddStudentSection = !this.showAddStudentSection;
    this.showStudentRecordsSection = !this.showStudentRecordsSection;
  }

  addStudent(): void {
    const { name, age } = this.studentForm.value;
    this.students.push({ name, age });
    this.renderStudents();
    this.resetForm();
  }

  viewStudent(index: number): void {
    const student = this.students[index];
    alert(`Student Name: ${student.name}\nStudent Age: ${student.age}`);
  }

  editStudent(index: number): void {
    const currentStudent = this.students[index];
    const newName = prompt('Enter new name:', currentStudent.name) ?? currentStudent.name;
    const newAgeInput = prompt('Enter new age:', String(currentStudent.age));
    
    // Check if newAgeInput is not null before converting to number
    const newAge = newAgeInput !== null ? +newAgeInput : currentStudent.age;
  
    this.students[index] = { name: newName, age: newAge };
    this.renderStudents();
  }

  deleteStudent(index: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.students.splice(index, 1);
      this.renderStudents();
    }
  }

  private renderStudents(): void {
    // Add logic to render students as needed
  }

  private resetForm(): void {
    this.studentForm.reset();
  }
  
  
}
