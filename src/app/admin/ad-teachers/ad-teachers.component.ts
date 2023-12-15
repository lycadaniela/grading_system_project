import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-ad-teachers',
  templateUrl: './ad-teachers.component.html',
  styleUrls: ['./ad-teachers.component.scss']
})
export class AdTeachersComponent implements OnInit {

  apiUrl = 'http://localhost:3000/api/teachers';

  currentSection: string = 'records';
  recordsData: any[] = [];
  selectedRecord: any = { teacher_name: '', employee_number: '', email_address: '', courses: '', classes: '', username: '', password: '' };
  editingRecord: any = null;

  // Form data properties
  teacher_name: string = '';
  employee_number: string = '';
  email_address: string = '';
  courses: string = '';
  classes: string = '';
  username: string = '';
  password: string = '';

  searchTerm: string = '';
  filteredRecordsData: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private http: HttpClient,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {
    this.loadRecords();
  }

 loadRecords() {
  this.teacherService.getAllTeacher().subscribe(
    (data) => {
      this.recordsData = data;
      this.filteredRecordsData = [...this.recordsData];
    },
    (error) => {
      console.error('GET Error:', error);

      if (error instanceof HttpErrorResponse) {
        console.error('Server Error Status:', error.status);
        console.error('Server Error Body:', error.error);
      }
    }
  );
}


submitForm() {
  if (this.teacher_name && this.employee_number && this.email_address && this.courses && this.classes && this.username && this.password) {
    const formData = {
      teacher_name: this.teacher_name,
      employee_number: this.employee_number,
      email_address: this.email_address,
      courses: this.courses,
      classes: this.classes,
      username: this.username,
      password: this.password
    };

    this.teacherService.createTeacher(formData).subscribe(
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
    this.teacher_name = '';
    this.employee_number = '';
    this.email_address = '';
    this.courses = '';
    this.classes = '';
    this.username = '';
    this.password = '';
  }

  viewRecord(record: any) {
    this.teacherService.getTeacherById(record.teacher_id).subscribe(
      (detailedRecord) => {
        this.selectedRecord = detailedRecord;
        this.toggleSection('view-form');
      },
      (error) => {
        console.error('Error fetching detailed record:', error);
      }
    );
  }

  deleteRecord(record: any) {
    const index = this.recordsData.indexOf(record);
  
    if (index !== -1) {
      this.teacherService.deleteTeacher(record.teacher_id).subscribe(
        () => {
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
    this.editingRecord = { ...record, id: record.teacher_id };
    this.toggleSection('edit-form');
  }

  updateRecord() {
    const index = this.recordsData.findIndex(record => record.teacher_id === this.editingRecord.id);
  
    if (index !== -1) {
      const updatedData = {
        teacher_name: this.editingRecord.teacher_name,
        employee_number: +this.editingRecord.employee_number,
        email_address: this.editingRecord.email_address,
        courses: this.editingRecord.courses,
        classes: this.editingRecord.classes,
        username: this.editingRecord.username,
        password: this.editingRecord.password,
      };
      
  
      this.teacherService.updateTeacher(this.editingRecord.id, updatedData).subscribe(
        () => {
          this.recordsData[index] = { teacher_id: this.editingRecord.id, ...updatedData };
          console.log('Updated client-side data:', this.recordsData);
          this.clearEditForm();
          this.toggleSection('records');
        },
        (error) => {
          console.error('Error updating record on the server:', error);
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
      this.loadRecords();
    } else {
      this.teacherService.searchTeacher(this.searchTerm).subscribe(
        (data) => {
          this.filteredRecordsData = data;
        },
        (error) => {
          console.error('Error searching records:', error);
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
