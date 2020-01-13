import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsAllComponent } from "./students-all/students-all.component";
import { StudentSingleComponent } from "./student-single/student-single.component";
const routes: Routes = [
  { path: "students", component: StudentsAllComponent },
  { path: "students/:id", component: StudentSingleComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
