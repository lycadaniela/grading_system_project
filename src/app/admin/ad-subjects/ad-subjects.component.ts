import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad-subjects',
  templateUrl: './ad-subjects.component.html',
  styleUrls: ['./ad-subjects.component.scss']
})
export class AdSubjectsComponent implements OnInit {

  toggleSections() {
    this.showSubjectRecords = !this.showSubjectRecords;
}

renderStudents() {
    // No need to implement this, as Angular's data binding will automatically update the view
}

addForm: FormGroup;
subjects: { subjectName: string; subjectCode: string }[] = [];
showSubjectRecords = false;

constructor(private ngZone: NgZone, private formBuilder: FormBuilder) {
  this.addForm = this.formBuilder.group({
    subjectName: ['', Validators.required],
    subjectCode: ['', Validators.required],
  });
}

ngOnInit() {
  // Retrieve data from localStorage on component initialization
  const storedSubject = localStorage.getItem('subjects');
  if (storedSubject) {
    this.subjects = JSON.parse(storedSubject);
  }

  this.showSubjectRecords =true;
}

addSubject() {
  if (this.addForm.valid) {
    this.ngZone.run(() => {
      this.subjects.push({ ...this.addForm.value });
      this.addForm.reset();
      this.toggleSections();

      // Store data in localStorage after adding a student
      localStorage.setItem('subjects', JSON.stringify(this.subjects));
    });
  } else {
    alert('Please provide valid subject name and code.');
  }
}

viewSubject(index: number) {
    const subject = this.subjects[index];
    alert(`Subject Name: ${subject.subjectName}\nSubject Code: ${subject.subjectCode}`);
}

editSubject(index: number) {
  const currentSubject = this.subjects[index];

  const newSubjectName = prompt('Enter new subject name:', currentSubject.subjectName);
  const newSubjectCode = prompt('Enter new subject code:', currentSubject.subjectCode);

  if (newSubjectName !== null && newSubjectCode !== null) {
    // Update the teacher details if the user provided new values
    this.subjects[index] = { subjectName: newSubjectName, subjectCode: newSubjectCode };

    // Update localStorage after editing a teacher
    this.updateLocalStorage();
  }
}

deleteSubject(index: number) {
  if (confirm('Are you sure you want to delete this subject?')) {
    this.subjects.splice(index, 1);

    // Update localStorage after deleting a student
    this.updateLocalStorage();
  }
}

private updateLocalStorage() {
  localStorage.setItem('subjects', JSON.stringify(this.subjects));
}

}
