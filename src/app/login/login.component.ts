import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { RegModalComponent } from '../reg-modal/reg-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      userType: ['admin', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  openRegistrationModal() {
    const dialogRef = this.dialog.open(RegModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        // Handle success, e.g., show a success message
        alert('Successfully registered!');
        this.resetRegistrationForm();
      }
    });
  }

  onSubmit() {
    const userType = this.loginForm.get('userType')!.value;
    if (userType === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else if (userType === 'student') {
      this.router.navigate(['/student-registration']);
    } else if (userType === 'teacher') {
      this.router.navigate(['/teacher-view-students']);
    }
  }

  resetRegistrationForm() {
    this.loginForm.reset();
  }

  ngOnInit(): void {
  }

}
