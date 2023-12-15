import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  login(username: string, password: string, userType: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;

    // Adjust the payload based on your server's expectations
    const payload = { username, password, userType };

    return this.http.post(loginUrl, payload);
  }
}
