import { InMemoryDbService } from "angular-in-memory-web-api";
import { Student } from "./student";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {
        id: 1,
        firstName: "Bob",
        lastName: "Apple",
        email: "bob@gmail.com",
        imageUrl: "cody.jpg",
        gpa: "3.0"
      },
      {
        id: 2,
        firstName: "Sam",
        lastName: "Orange",
        email: "sam@gmail.com",
        imageUrl: "cody.jpg",
        gpa: "3.5"
      },
      {
        id: 3,
        firstName: "John",
        lastName: "Grape",
        email: "John@gmail.com",
        imageUrl: "cody.jpg",
        gpa: "3.8"
      }
    ];
    return { students };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(students: Student[]): number {
    return students.length > 0
      ? Math.max(...students.map(student => student.id)) + 1
      : 1;
  }
}
