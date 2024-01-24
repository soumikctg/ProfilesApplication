import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { StudentDetail } from '../student-detail';
import { DetailRowComponent } from "../detail-row/detail-row.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-paged-students',
    standalone: true,
    templateUrl: './paged-students.component.html',
    styleUrl: './paged-students.component.css',
    imports: [FormsModule, DetailRowComponent,CommonModule]
})
export class PagedStudentsComponent {
  students: StudentDetail[] =[];
  page:number=1;
  pageSize:number=10;

  constructor(private studentService: StudentServiceService){}

  getPagedStudents(){
    this.studentService.getPagedStudents(this.page, this.pageSize).subscribe(
      (students) => {
        this.students=students;
      }
    );
  }
}
