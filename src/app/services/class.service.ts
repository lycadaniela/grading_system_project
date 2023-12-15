import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl = 'http://localhost:3000/api/classes'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllClass(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addClass(classname: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, classname);
  }

  createClass(classData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, classData);
  }

  getClassById(classId: number): Observable<any> {
    const url = `${this.apiUrl}/${classId}`;
    return this.http.get<any>(url);
  }

  updateClass(id: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updatedData);
  }

  deleteClass(classId: number): Observable<any> {
    const url = `${this.apiUrl}/${classId}`;
    return this.http.delete<any>(url);
  }

  searchClass(term: string): Observable<any[]> {
    const url = `${this.apiUrl}/search/${term}`;
    return this.http.get<any[]>(url);
  }
}
