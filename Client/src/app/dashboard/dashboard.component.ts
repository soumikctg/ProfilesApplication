import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

import { CommonModule } from '@angular/common';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentServiceService } from '../student-service.service';
import { StudentDetail } from '../student-detail';
import { DetailRowComponent } from "../detail-row/detail-row.component";
import { FormsModule, NgModel } from '@angular/forms';
import { PagedStudentsComponent } from "../paged-students/paged-students.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [
        NavbarComponent,
        StudentDetailComponent,
        CommonModule,
        StudentFormComponent,
        DetailRowComponent,
        FormsModule,
        PagedStudentsComponent
    ]
})
export class DashboardComponent {

  allStudent:boolean = false;
  pagedStudent:boolean = false;

  studentId!:string;
  student!: StudentDetail;
  add: boolean = false;
  constructor(private studentService: StudentServiceService) {}
  onClick(): void {
    this.add = !this.add;
  }

  showAll(){
    this.pagedStudent=false;
    this.allStudent=!this.allStudent;
  }
  showPaged(){
    this.allStudent=false;
    this.pagedStudent=!this.pagedStudent;
  }

  delete() {
    this.studentService.deleteAllStudent().subscribe(
      () => {
        window.location.reload();
      }
    );
  }

  getStudentById(){
    this.studentService.getStudentById(this.studentId).subscribe(
      student =>{
        this.student=student;
      }
    );
  }
}
