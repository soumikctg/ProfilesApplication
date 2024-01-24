import { Component,Input } from '@angular/core';
import { StudentDetail } from '../student-detail';
import { CommonModule } from '@angular/common';
import { PartialUpdateComponent } from "../partial-update/partial-update.component";
import { UpdateProfileComponent } from "../update-profile/update-profile.component";
import { StudentServiceService } from '../student-service.service';

@Component({
    selector: 'app-detail-row',
    standalone: true,
    templateUrl: './detail-row.component.html',
    styleUrl: './detail-row.component.css',
    imports: [CommonModule, PartialUpdateComponent, UpdateProfileComponent]
})
export class DetailRowComponent {
  @Input() student!: StudentDetail;

  constructor(private studentService:StudentServiceService){}
  action : boolean = false;

  onClick(){
    this.action=!this.action;
  }

  // studentId:string = this.student.Id;
  partial:boolean=false;
  partialUpdateProfile(){
    this.partial=!this.partial;
  }
  update:boolean=false;
  updateProfile(){
    this.update=!this.update;
  }

  deleteStudent() {
    if (this.student && this.student.Id) {
      const studentId = this.student.Id;
      console.log(studentId);
      this.studentService.deleteStudent(studentId).subscribe(
        () => {
          // Handle success, e.g., refresh the list of students
          console.log('Student deleted successfully');
          window.location.reload();
        },
        (error) => {
          // Handle error
          console.error('Error deleting student:', error);
        }
      );
    } else {
      console.warn('Student ID is null or undefined');
    }
  }
  
}
