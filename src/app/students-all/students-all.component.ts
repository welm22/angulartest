import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student.service";
import { Student } from "../student";

@Component({
  selector: "app-students-all",
  templateUrl: "./students-all.component.html",
  styleUrls: ["./students-all.component.css"]
})
export class StudentsAllComponent implements OnInit {
  students: Student[];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }
  getStudents(): void {
    this.studentService
      .getStudents()
      .subscribe(students => (this.students = students));
  }
}
