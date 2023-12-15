import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiAdmin = 'http://localhost:3000/api/admins'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllAdmins(): Observable<any> {
    return this.http.get(`${this.apiAdmin}`);
  }

  getAdminById(id: number): Observable<any> {
    return this.http.get(`${this.apiAdmin}/${id}`);
  }

  addAdmin(adminData: any): Observable<any> {
    return this.http.post(`${this.apiAdmin}`, adminData);
  }

  updateAdmin(id: number, adminData: any): Observable<any> {
    return this.http.put(`${this.apiAdmin}/${id}`, adminData);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.apiAdmin}/${id}`);
  }
}
