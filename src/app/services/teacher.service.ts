import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:3000/api/teachers';

  constructor(private http: HttpClient) {}

  getAllTeacher(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTeacher(teacher: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, teacher);
  }

  createTeacher(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  getTeacherById(teacherId: number): Observable<any> {
    const url = `${this.apiUrl}/${teacherId}`;
    return this.http.get<any>(url);
  }

  updateTeacher(id: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updatedData);
  }

  deleteTeacher(teacherId: number): Observable<any> {
    const url = `${this.apiUrl}/${teacherId}`;
    return this.http.delete<any>(url);
  }

  searchTeacher(term: string): Observable<any[]> {
    const url = `${this.apiUrl}/search/${term}`;
    return this.http.get<any[]>(url);
  }
}
