import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad-teachers',
  templateUrl: './ad-teachers.component.html',
  styleUrls: ['./ad-teachers.component.scss']
})
export class AdTeachersComponent implements OnInit {
  searchTerm: string = '';

  toggleSections() {
    this.showTeacherRecords = !this.showTeacherRecords;
}

renderStudents() {
    // No need to implement this, as Angular's data binding will automatically update the view
}

addForm: FormGroup;
teachers: { name: string; subject: string }[] = [];
showTeacherRecords = false;

constructor(private ngZone: NgZone, private formBuilder: FormBuilder) {
  this.addForm = this.formBuilder.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
  });
}

ngOnInit() {
  // Retrieve data from localStorage on component initialization
  const storedTeachers = localStorage.getItem('teachers');
  if (storedTeachers) {
    this.teachers = JSON.parse(storedTeachers);
  }

  this.showTeacherRecords =true;
}

addTeacher() {
  if (this.addForm.valid) {
    this.ngZone.run(() => {
      this.teachers.push({ ...this.addForm.value });
      this.addForm.reset();
      this.toggleSections();

      // Store data in localStorage after adding a student
      localStorage.setItem('teachers', JSON.stringify(this.teachers));
    });
  } else {
    alert('Please provide valid name and subject.');
  }
}

searchTeachers() {
  if (this.searchTerm.trim() !== '') {
    const searchResults = this.teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (searchResults.length > 0) {
      this.teachers = [...searchResults];
    } else {
      alert('No matching teachers found.');
    }
  } else {
    alert('Please enter a search term.');
  }
}

resetSearch() {
  this.searchTerm = '';
  const storedTeachers = localStorage.getItem('teachers');
  
  if (storedTeachers) {
    this.teachers = JSON.parse(storedTeachers);
  } else {
    this.teachers = [];
  }
}

viewTeacher(index: number) {
    const teacher = this.teachers[index];
    alert(`Teacher Name: ${teacher.name}\nTeacher Subject: ${teacher.subject}`);
}

editTeacher(index: number) {
  const currentTeacher = this.teachers[index];

  const newName = prompt('Enter new name:', currentTeacher.name);
  const newSubject = prompt('Enter new subject:', currentTeacher.subject);

  if (newName !== null && newSubject !== null) {
    // Update the teacher details if the user provided new values
    this.teachers[index] = { name: newName, subject: newSubject };

    // Update localStorage after editing a teacher
    this.updateLocalStorage();
  }
}

deleteTeacher(index: number) {
  if (confirm('Are you sure you want to delete this teacher?')) {
    this.teachers.splice(index, 1);

    // Update localStorage after deleting a student
    this.updateLocalStorage();
  }
}

private updateLocalStorage() {
  localStorage.setItem('teachers', JSON.stringify(this.teachers));
}

}
