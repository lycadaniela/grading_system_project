import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/shared_data/student';

@Component({
  selector: 'app-ad-students',
  templateUrl: './ad-students.component.html',
  styleUrls: ['./ad-students.component.scss']
})
export class AdStudentsComponent implements OnInit {

  addForm: FormGroup;
  students: { name: string; age: number }[] = [];
  showStudentRecords = false;

  toggleSections() {
    this.showStudentRecords = !this.showStudentRecords;
  }

  renderStudents() {
    // No need to implement this, as Angular's data binding will automatically update the view
  }

  constructor(private ngZone: NgZone, private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    // Retrieve data from localStorage on component initialization
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      this.students = JSON.parse(storedStudents);
    }
    
    this.showStudentRecords =true;
  }

  addStudent() {
    if (this.addForm.valid) {
      this.ngZone.run(() => {
        this.students.push({ ...this.addForm.value });
        this.addForm.reset();
        this.toggleSections();

        // Store data in localStorage after adding a student
        localStorage.setItem('students', JSON.stringify(this.students));
      });
    } else {
      alert('Please provide valid name and age.');
    }
  }

  viewStudent(index: number) {
    const student = this.students[index];
    alert(`Student Name: ${student.name}\nStudent Age: ${student.age}`);
  }

  editStudent(index: number) {
    const newName = prompt('Enter new name:', this.students[index].name);
    const newAgeString = prompt('Enter new age:', String(this.students[index].age));

    if (newName !== null && newAgeString !== null) {
      const newAge = parseInt(newAgeString, 10);

      if (!isNaN(newAge)) {
        this.students[index].name = newName;
        this.students[index].age = newAge;
      } else {
        // Handle invalid age input (not a number)
        alert('Invalid age input. Please enter a valid number.');
      }
    }
  }

  deleteStudent(index: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.students.splice(index, 1);

      // Update localStorage after deleting a student
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  
}
