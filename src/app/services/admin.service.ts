import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/api/admins'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllAdmins(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getAdminById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addAdmin(adminData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, adminData);
  }

  updateAdmin(id: number, adminData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, adminData);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
  
    return this.http.post(`${this.apiUrl}/login`, body)
      .pipe(
        catchError((error: any) => {
          console.error('Error during login:', error);
  
          // Log the complete error response
          console.error('Complete error response:', error);
  
          // Return an observable with a default error response or null
          return of({ success: false, message: 'Unknown error occurred' });
        })
      );
  }
}
