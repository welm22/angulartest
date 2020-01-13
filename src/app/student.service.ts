import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "./student";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(private http: HttpClient) {}
  getStudents(): Observable<Student[]> {
    try {
      let students = this.http.get<Student[]>("api/students");
      return students;
    } catch (error) {
      console.error(error);
    }
  }
  getStudent(id: number): Observable<Student> {
    try {
      let student = this.http.get<Student>(`api/students/${id}`);
      return student;
    } catch (error) {
      console.error(error);
    }
  }
}
