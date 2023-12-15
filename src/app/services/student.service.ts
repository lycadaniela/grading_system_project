import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/api/students';
  departmentsUrl = 'http://localhost:3000/api/classes';
  coursesUrl = 'http://localhost:3000/api/courses';

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addStudents(student: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, student);
  }

  createStudents(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  getStudentById(studentId: number): Observable<any> {
    const url = `${this.apiUrl}/${studentId}`;
    return this.http.get<any>(url);
  }

  updateStudents(id: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updatedData);
  }

  deleteStudents(studentId: number): Observable<any> {
    const url = `${this.apiUrl}/${studentId}`;
    return this.http.delete<any>(url);
  }

  searchStudents(term: string): Observable<any[]> {
    const url = `${this.apiUrl}/search/${term}`;
    return this.http.get<any[]>(url);
  }

  getDepartments(): Observable<any> {
    return this.http.get<any>(this.departmentsUrl);
  }

  getCourses(): Observable<any> {
    return this.http.get<any>(this.coursesUrl);
  }
}