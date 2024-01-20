import { Component } from '@angular/core';
import { StudentDetail } from '../student-detail';
import { CommonModule } from '@angular/common';
import { NgIconComponent} from '@ng-icons/core';
import { heroPencilSquare} from '@ng-icons/heroicons/outline';
import { DetailRowComponent } from "../detail-row/detail-row.component";
import { StudentServiceService } from '../student-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-student-detail',
    standalone: true,
    templateUrl: './student-detail.component.html',
    styleUrl: './student-detail.component.css',
    imports: [CommonModule, NgIconComponent, DetailRowComponent, HttpClientModule]
})
export class StudentDetailComponent {
  edit = heroPencilSquare;


  action : boolean = false;

  onClick(){
    this.action=!this.action;
  }

  students: StudentDetail[] =[];

  constructor(private httpService: StudentServiceService){
    this.httpService.getAllStudent().subscribe(result => {
      this.students=result;
    })
  }
  
}
