import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared_data/auth.service';
import { User } from 'src/shared_data/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userType: string = '';
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.userType === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else if (this.userType === 'teacher') {
      this.router.navigate(['/teacher-dashboard']);
    } else if (this.userType === 'student') {
      this.router.navigate(['/student-dashboard']);
    }
  }

  isFormValid(): boolean {
    return !!this.userType && !!this.username && !!this.password;
  }
}
