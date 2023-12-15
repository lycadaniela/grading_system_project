import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';
import { DataService } from 'src/shared_data/data.service';

@Component({
  selector: 'app-ad-class',
  templateUrl: './ad-class.component.html',
  styleUrls: ['./ad-class.component.scss']
})
export class AdClassComponent {

  apiUrl = 'http://localhost:3000/api/classes';

  currentSection: string = 'records';
  recordsData: any[] = [];
  selectedRecord: any = { department: '', yearLevel: '', block: ''};
  editingRecord: any = null;
  

  // Form data properties
  department: string = '';
  yearLevel: string = '';
  block: string = '';
  
  searchTerm: string = '';
  filteredRecordsData: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private http: HttpClient,
    private classService: ClassService
  ) {}

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    this.classService.getAllClass().subscribe((data) => {
      this.recordsData = data;
      this.filteredRecordsData = [...this.recordsData];
    });
  }

  submitForm() {
    const formData = {
      "department": this.department,
      "year_level": this.yearLevel,  // Change to 'year_level'
      "block": this.block,
    };
  
    // Send a POST request to the API to add a new class
    this.classService.createClass(formData).subscribe(
      (response: any) => {
        // Assuming the server returns the newly created record
        const newRecord = response;
  
        // Update the local data and reset the form
        this.recordsData.push(newRecord);
        this.filteredRecordsData = [...this.recordsData];
        this.clearForm();
  
        // Toggle back to the records section
        this.toggleSection('records');
      },
      (error) => {
        console.error('POST Error:', error);
  
        if (error instanceof HttpErrorResponse && error.status === 400) {
          console.error('Validation Errors:', error.error.validationErrors);
          // Handle validation errors, e.g., display an error message to the user
        } else {
          // Handle other types of errors
        }
      }
    );
  }

  clearForm() {
    this.department = '';
    this.yearLevel = '';
    this.block = '';
  }

  viewRecord(record: any) {
    // Fetch the detailed record from the server using CourseService
    this.classService.getClassById(record.class_id).subscribe(
      (detailedRecord) => {
        this.selectedRecord = detailedRecord;
        this.toggleSection('view-form');
      },
      (error) => {
        console.error('Error fetching detailed record:', error);
        // Handle error, e.g., display an error message to the user
      }
    );
  }


  deleteRecord(record: any) {
    const index = this.recordsData.indexOf(record);
  
    if (index !== -1) {
      // Delete from the server
      this.classService.deleteClass(record.class_id).subscribe(
        () => {
          // If deletion on the server is successful, delete from the client
          this.recordsData.splice(index, 1);
          this.filteredRecordsData = [...this.recordsData];
          console.log('Data deleted:', record);
        },
        (error) => {
          console.error('Error deleting record on the server:', error);
        }
      );
    } else {
      console.error('Record not found in recordsData.');
    }
  }

  editRecord(record: any) {
    this.editingRecord = { ...record, id: record.class_id };
    this.toggleSection('edit-form');
  }

  updateRecord() {
    const index = this.recordsData.findIndex(record => record.class_id === this.editingRecord.id);
    
    if (index !== -1) {
      const updatedData = {
        department: this.editingRecord.department,
        year_level: this.editingRecord.year_level,
        block: this.editingRecord.block,
      };
  
      this.classService.updateClass(this.editingRecord.id, updatedData).subscribe(
        () => {
          console.log('Record updated successfully!');
          this.loadRecords();
          this.clearEditForm();
          this.toggleSection('records');
        },
        (error) => {
          console.error('Error updating record:', error);
        }
      );
    } else {
      console.error('Record not found in recordsData. Editing Record ID:', this.editingRecord.id);
    }
  }

  clearEditForm() {
    this.editingRecord = null;
  }

  searchRecords() {
    if (this.searchTerm.trim() === '') {
      this.loadRecords(); // Reload all records if the search term is empty
    } else {
      this.classService.searchClass(this.searchTerm).subscribe(
        (data) => {
          this.filteredRecordsData = data;
        },
        (error) => {
          console.error('Error searching records:', error);
          // Handle error, e.g., display an error message to the user
        }
      );
    }
  }

  resetSearch() {
    this.searchTerm = '';
    this.searchRecords();
  }

  toggleSection(section: string) {
    this.ngZone.run(() => {
      this.currentSection = section;

      if (section !== 'view-form') {
        this.selectedRecord = null;
      }

      this.cdr.detectChanges();
    });
  };

}

