import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ad-subjects',
  templateUrl: './ad-subjects.component.html',
  styleUrls: ['./ad-subjects.component.scss']
})
export class AdSubjectsComponent implements OnInit {
  
  apiUrl = 'http://localhost:3000/api/courses';

  currentSection: string = 'records';
  recordsData: any[] = [];
  selectedRecord: any = { course: '', code: '' };
  editingRecord: any = null;

  // Form data properties
  course: string = '';
  code: string = '';

  searchTerm: string = '';
  filteredRecordsData: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private http: HttpClient,
    private courseService: CourseService // Ensure this line is present
  ) {}

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.recordsData = data;
      this.filteredRecordsData = [...this.recordsData];
    });
  }

  submitForm() {
    const formData = {
      "course_name": this.course,
      "course_code": this.code// Replace with actual instructor data
    };

    this.courseService.createCourse(formData).subscribe(
      () => {
        this.loadRecords();
        this.clearForm();
        this.toggleSection('records');
      },
      (error) => {
        console.error('POST Error:', error);
        // Handle error, e.g., display an error message to the user
      }
    );
  }

  clearForm() {
    this.course = '';
    this.code = '';
  }

  viewRecord(record: any) {
    // Fetch the detailed record from the server using CourseService
    this.courseService.getCourseById(record.course_id).subscribe(
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
      this.courseService.deleteCourse(record.course_id).subscribe(
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
    this.editingRecord = { ...record, id: record.course_id };
    this.toggleSection('edit-form');
  }

  updateRecord() {
    const index = this.recordsData.findIndex(record => record.course_id === this.editingRecord.id);
    
    if (index !== -1) {
      const updatedData = {
        course_name: this.editingRecord.course_name,
        course_code: this.editingRecord.course_code,
      };
  
      this.courseService.updateCourse(this.editingRecord.id, updatedData).subscribe(
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
      this.courseService.searchCourses(this.searchTerm).subscribe(
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
  }
}