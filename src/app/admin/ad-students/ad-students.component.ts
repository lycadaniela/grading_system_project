import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/shared_data/student';

@Component({
  selector: 'app-ad-students',
  templateUrl: './ad-students.component.html',
  styleUrls: ['./ad-students.component.scss']
})
export class AdStudentsComponent implements OnInit {

  apiUrl = 'http://localhost:3000/api/courses';

  currentSection: string = 'records';
  recordsData: any[] = [];
  selectedRecord: any = { student_name: '', student_number: '', department: '', year_level: '', course: '', username: '', password: '' };
  editingRecord: any = null;

  // Form data properties
  student_name: string = '';
  student_number: string = '';
  department: string = '';
  year_level: string = '';
  course: string = '';
  username: string = '';
  password: string = '';

  searchTerm: string = '';
  filteredRecordsData: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private http: HttpClient,
    private studentCourse: StudentService
  ) {}

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    this.studentCourse.getAllStudents().subscribe((data) => {
      this.recordsData = data;
      this.filteredRecordsData = [...this.recordsData];
    });
  }

  submitForm() {
    // Basic validation
    if (this.student_name && this.student_number && this.department && this.year_level && this.course && this.username && this.password) {
      const formData = {
        student_name: this.student_name,
        student_number: this.student_number,
        department: this.department,
        year_level: this.year_level,
        course: this.course,
        username: this.username,
        password: this.password
      };

      this.studentCourse.createStudents(formData).subscribe(
        () => {
          this.loadRecords();
          this.clearForm();
          this.toggleSection('records');
        },
        (error) => {
          console.error('POST Error:', error);
          // Handle error, e.g., display an error message to the user
          if (error instanceof HttpErrorResponse) {
            if (error.status === 400) {
              // Bad Request
              console.error('Bad Request:', error.error.message);
              // Display an error message to the user
            } else {
              // Other errors
              console.error('Server Error:', error.error.message);
              // Display a generic error message
            }
          }
        }
      );
    } else {
      // Form is not valid, display an error message or handle accordingly
    }
  }

  clearForm() {
    this.student_name = '';
    this.student_number = '';
    this.department = '';
    this.year_level = '';
    this.course = '';
    this.username = '';
    this.password = '';
  }


  viewRecord(record: any) {
    // Fetch the detailed record from the server using CourseService
    this.studentCourse.getStudentById(record.student_id).subscribe(
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
      this.studentCourse.deleteStudents(record.student_id).subscribe(
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
    this.editingRecord = { ...record, id: record.student_id };
    this.toggleSection('edit-form');
  }

  updateRecord() {
    const index = this.recordsData.findIndex(record => record.student_id === this.editingRecord.id);
  
    if (index !== -1) {
      // Parse student_number to an integer
      const updatedData = {
        student_name: this.editingRecord.student_name,
        student_number: +this.editingRecord.student_number, // Convert to number
        department: this.editingRecord.department,
        year_level: this.editingRecord.year_level,
        course: this.editingRecord.course,
        username: this.editingRecord.username,
        password: this.editingRecord.password,
      };
  
      console.log('Sending update request:', updatedData);
  
      this.studentCourse.updateStudents(this.editingRecord.id, updatedData).subscribe(
        () => {
          console.log('Record updated successfully on the server!');
  
          // Update the client-side data after a successful server update
          this.recordsData[index] = { student_id: this.editingRecord.id, ...updatedData };
          console.log('Updated client-side data:', this.recordsData);
          this.clearEditForm();
          this.toggleSection('records');
        },
        (error) => {
          console.error('Error updating record on the server:', error);
          // Log the server response for debugging
          console.error('Server Response:', error.error);
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
      this.studentCourse.searchStudents(this.searchTerm).subscribe(
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