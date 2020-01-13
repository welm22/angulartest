import { Component, OnInit } from "@angular/core";
import { Student } from "../student";
import { StudentService } from "../student.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-student-single",
  templateUrl: "./student-single.component.html",
  styleUrls: ["./student-single.component.css"]
})
export class StudentSingleComponent implements OnInit {
  student: Student;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getStudent();
  }
  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.studentService
      .getStudent(id)
      .subscribe(student => (this.student = student));
  }
}
