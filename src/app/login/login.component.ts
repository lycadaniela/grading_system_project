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
export class LoginComponent implements OnInit {
  
 loginForm: FormGroup;
  registrationForm: FormGroup;
  isLoginMode: boolean = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      userType: ['admin', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.registrationForm = this.formBuilder.group({
      userType: ['admin', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  toggleMode(event: Event) {
    event.preventDefault();
    this.isLoginMode = !this.isLoginMode;
    this.clearFormData();
  }

  clearFormData() {
    if (this.isLoginMode) {
      // Preserve selected user type in login mode
      const selectedUserType = this.loginForm.get('userType')?.value;
      this.registrationForm.reset({ userType: selectedUserType });
    } else {
      // Set default user type to 'admin' in registration mode
      this.loginForm.reset({ userType: 'admin' });
    }
  }

  submit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    if (this.loginForm.valid) {
      const user: User = {
        userType: this.loginForm.value.userType,
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };
  
      this.authService.login(user).subscribe(
        (loggedIn) => {
          if (loggedIn) {
            // Navigate based on userType
            switch (user.userType) {
              case 'admin':
                this.router.navigate(['/admin-dashboard']);
                break;
              case 'teacher':
                this.router.navigate(['/teacher-dashboard']);
                break;
              case 'student':
                this.router.navigate(['/student-dashboard']);
                break;
              default:
                alert('Unknown user type. Please contact support.');
            }
          } else {
            alert('Login failed. Please check your credentials.');
          }
        }
      );
    } else {
      alert('Please provide valid username and password.');
    }
  }

  register() {
    if (this.registrationForm.valid) {
      const user: User = {
        userType: this.registrationForm.value.userType,
        username: this.registrationForm.value.username,
        password: this.registrationForm.value.password,
      };
  
      this.authService.register(user).subscribe(
        (registered) => {
          if (registered) {
            // Registration successful, display alert
            alert('Registration successful! You can now log in.');
  
            // Optionally, you can automatically switch to the login mode after registration
            this.isLoginMode = true;
  
            // Optionally, you can navigate to the login page after registration
            this.router.navigate(['/login']);
          } else {
            alert('Username is already taken. Please choose a different one.');
          }
        }
      );
    } else {
      alert('Please provide valid registration data.');
    }
  }

}
