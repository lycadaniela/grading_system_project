import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad-schoolyear',
  templateUrl: './ad-schoolyear.component.html',
  styleUrls: ['./ad-schoolyear.component.scss']
})
export class AdSchoolyearComponent implements OnInit {

  toggleSections() {
    this.showYearRecords = !this.showYearRecords;
  }

  renderStudents() {
    // No need to implement this, as Angular's data binding will automatically update the view
  }

  addForm: FormGroup;
  years: { schoolYear: string; startDate: Date; endDate: Date; semesters: string; ongoing: string;}[] = [];
  showYearRecords = false;

  editingIndex: number | null = null;
  editForm: FormGroup;


  constructor(private ngZone: NgZone, private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      schoolYear: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      semesters: [''],
      ongoing: [''],
    });

    this.editForm = this.formBuilder.group({
      schoolYear: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      semesters: [false],
      ongoing: [''],
    });
  }

  ngOnInit() {
    const storedYear = localStorage.getItem('schoolYear');
  if (storedYear) {
    this.years = JSON.parse(storedYear).map((year: any) => ({
      ...year,
      startDate: new Date(year.startDate),
      endDate: new Date(year.endDate),
    }));
  }
  }

  addYear() {
    if (this.addForm.valid) {
      this.ngZone.run(() => {
        this.years.push({ ...this.addForm.value });
        this.addForm.reset();
        this.toggleSections();

        // Store data in localStorage after adding a student
        localStorage.setItem('schoolYear', JSON.stringify(this.years));
      });
    } else {
      alert('Please provide valid information.');
    }
  }

  viewYear(index: number) {
    const year = this.years[index];
    alert(`Year: ${year.schoolYear}\nStart Date: ${year.startDate}\nEnd Date: ${year.endDate}\nSemester: ${year.semesters}\nOngoing: ${year.ongoing ? 'Yes' : 'No'}`);
  }

  editYear(index: number) {
    const currentYear = this.years[index];
  
    const newSchoolYear = prompt('Enter new school year:', currentYear.schoolYear);
    const newStartDateString = prompt('Enter new start date:', this.formatDate(currentYear.startDate));
    const newEndDateString = prompt('Enter new end date:', this.formatDate(currentYear.endDate));
    const newSemester = prompt('Enter new semester:', currentYear.semesters);
    const newOngoing = prompt('Is it ongoing? (Yes/No):', currentYear.ongoing ? 'Yes' : 'No');
  
    if (newSchoolYear !== null && newStartDateString !== null && newSemester !== null && newEndDateString !== null && newOngoing !== null) {
      const newStartDate = new Date(newStartDateString);
      const newEndDate = new Date(newEndDateString);
  
      this.years[index] = { schoolYear: newSchoolYear, startDate: newStartDate, endDate: newEndDate, semesters: newSemester, ongoing: newOngoing };
      this.updateLocalStorage();
    }
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  saveEdit() {
    if (this.editForm.valid && this.editingIndex !== null) {
      const editedYear = this.editForm.value;
      
      this.years[this.editingIndex] = {
        schoolYear: editedYear.schoolYear,
        startDate: new Date(editedYear.startDate),
        endDate: new Date(editedYear.endDate),
        semesters: editedYear.semesters,
        ongoing: editedYear.ongoing,
      };

      // Update the localStorage
      this.updateLocalStorage();

      this.editForm.reset();
      this.editingIndex = null;
    }
  }

  cancelEdit() {
    this.editForm.reset();
    this.editingIndex = null;
  }
  

  deleteYear(index: number) {
    const confirmation = confirm('Are you sure you want to delete this school year?');
    if (confirmation) {
      this.years.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage() {
    localStorage.setItem('schoolYear', JSON.stringify(this.years));
  }
}

