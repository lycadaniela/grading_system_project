import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, course);
  }

  createCourse(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  getCourseById(courseId: number): Observable<any> {
    const url = `${this.apiUrl}/${courseId}`;
    return this.http.get<any>(url);
  }

  updateCourse(id: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updatedData);
  }

  deleteCourse(courseId: number): Observable<any> {
    const url = `${this.apiUrl}/${courseId}`;
    return this.http.delete<any>(url);
  }

  searchCourses(term: string): Observable<any[]> {
    const url = `${this.apiUrl}/search/${term}`;
    return this.http.get<any[]>(url);
  }
}
