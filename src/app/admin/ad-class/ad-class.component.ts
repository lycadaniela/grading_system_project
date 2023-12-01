import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad-class',
  templateUrl: './ad-class.component.html',
  styleUrls: ['./ad-class.component.scss']
})
export class AdClassComponent implements OnInit {

  toggleSections() {
    this.showClassRecords = !this.showClassRecords;
}

renderStudents() {
    // No need to implement this, as Angular's data binding will automatically update the view
}

addForm: FormGroup;
classes: { className: string; yearLevel: string }[] = [];
showClassRecords = false;

constructor(private ngZone: NgZone, private formBuilder: FormBuilder) {
  this.addForm = this.formBuilder.group({
    className: ['', Validators.required],
    yearLevel: ['', Validators.required],
  });
}

ngOnInit() {
  // Retrieve data from localStorage on component initialization
  const storedClass = localStorage.getItem('classes');
  if (storedClass) {
    this.classes = JSON.parse(storedClass);
  }
}

addClass() {
  if (this.addForm.valid) {
    this.ngZone.run(() => {
      this.classes.push({ ...this.addForm.value });
      this.addForm.reset();
      this.toggleSections();

      // Store data in localStorage after adding a student
      localStorage.setItem('classes', JSON.stringify(this.classes));
    });
  } else {
    alert('Please provide valid class name and year level.');
  }
}

viewClass(index: number) {
    const classes = this.classes[index];
    alert(`Class Name: ${classes.className}\nYear Level: ${classes.yearLevel}`);
}

editClass(index: number) {
  const currentClass = this.classes[index];

  const newClassName = prompt('Enter new class name:', currentClass.className);
  const newYearLevel = prompt('Enter new year level:', currentClass.yearLevel);

  if (newClassName !== null && newYearLevel !== null) {
    // Update the teacher details if the user provided new values
    this.classes[index] = { className: newClassName, yearLevel: newYearLevel };

    // Update localStorage after editing a teacher
    this.updateLocalStorage();
  }
}

deleteClass(index: number) {
  if (confirm('Are you sure you want to delete this class?')) {
    this.classes.splice(index, 1);

    // Update localStorage after deleting a student
    this.updateLocalStorage();
  }
}

private updateLocalStorage() {
  localStorage.setItem('classes', JSON.stringify(this.classes));
}

}
