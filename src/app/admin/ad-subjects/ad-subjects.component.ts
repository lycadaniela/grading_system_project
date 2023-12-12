import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad-subjects',
  templateUrl: './ad-subjects.component.html',
  styleUrls: ['./ad-subjects.component.scss']
})
export class AdSubjectsComponent {

  currentSection: string = 'records';
  recordsData: any[] = [];
  selectedRecord: any = { course: '', code: '', instructor: '', classes: '' };
  editingRecord: any = null;
  

  // Form data properties
  course: string = '';
  code: string = '';
  instructor: string = '';
  classes: string = '';

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
    // Initialize recordsData with sample data
    this.recordsData = [
      // Add more data as needed
    ];
  }
  

  toggleSection(section: string, record?: any) {
    console.log('Toggling section:', section, 'Record:', record);
  
    this.ngZone.run(() => {
      this.currentSection = section;
  
      if (section !== 'view-form') {
        this.selectedRecord = null;
      }
  
      this.cdr.detectChanges();
    });
  }

  submitForm() {
    const formData = {
      id: this.nextRecordId++,
      course: this.course,
      code: this.code,
      instructor: this.instructor,
      classes: this.classes,
    };
  
    this.recordsData.push(formData);
    this.filteredRecordsData = [...this.recordsData];
  
    this.clearForm();
    this.toggleSection('records');
  }

  clearForm() {
    this.course = '';
    this.code = '';
    this.instructor = '';
    this.classes = '';
  }

  viewRecord(record: any) {
    this.selectedRecord = record;
    this.toggleSection('view-form');
  }

  deleteRecord(record: any) {
    const index = this.recordsData.indexOf(record);
    if (index !== -1) {
      this.recordsData.splice(index, 1);
  
      // Update filteredRecordsData after deletion
      this.filteredRecordsData = this.recordsData.filter(item =>
        item.department.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.yearLevel.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  
      console.log('Data deleted:', record);
    } else {
      console.error('Record not found in recordsData.');
    }
  }

  editRecord(record: any) {
    console.log('Editing Record:', record);
    // Set editingRecord to a copy of the selected record
    this.editingRecord = { ...record, id: record.id }; // Ensure 'id' is set
    console.log('Editing Record (after assignment):', this.editingRecord);
    this.toggleSection('edit-form');
  }

  updateRecord() {
    // Find the index of the record to update
    const index = this.recordsData.findIndex(record => record.id === this.editingRecord.id);
  
    if (index !== -1) {
      // Update the record
      this.recordsData[index] = { ...this.editingRecord };
  
      // Update filteredRecordsData as well
      this.searchRecords();
  
      console.log('Record updated:', this.recordsData[index]);
      console.log('Updated recordsData:', this.recordsData);
      console.log('Filtered recordsData:', this.filteredRecordsData);
  
      this.clearEditForm();
      this.toggleSection('records');
    } else {
      console.error('Record not found in recordsData.');
    }
  }

  clearEditForm() {
    this.editingRecord = null;
  }

  ngOnInit() {
    console.log('Initial recordsData:', this.recordsData);
  }

  // Add the searchTerm property at the top of your component
searchTerm: string = '';
filteredRecordsData: any[] = [];

searchRecords() {
  // Perform the search based on the searchTerm
  this.filteredRecordsData = this.recordsData.filter(item =>
      item.department.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.yearLevel.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

resetSearch() {
  this.searchTerm = ''; // Reset the search term
  this.searchRecords(); // Call the searchRecords method to reset the table
}

nextRecordId: number = 1;

}