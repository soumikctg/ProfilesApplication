import { Component,Input, NgModule, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { StudentDetail } from '../student-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partial-update',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './partial-update.component.html',
  styleUrl: './partial-update.component.css'
})
export class PartialUpdateComponent implements OnChanges {
  @Input() student!: StudentDetail;


  profileForm = new FormGroup({
    Id: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Contact: new FormControl({value:'', disabled:false}),
    Address: new FormControl({value:'', disabled:false}),
    Department: new FormControl('')
  })
  constructor(private studentService: StudentServiceService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const studentChange = changes['student'];
    if (studentChange && studentChange.currentValue && this.student) {
      this.updateForm();
    }
  }

  updateForm(){
    this.profileForm.setValue({
      Id:this.student.Id,
      FirstName: this.student.FirstName,
      LastName: this.student.LastName,
      Contact: this.student.Contact,
      Address: this.student.Address,
      Department: this.student.Department
    })

  }

  updateStudent() {

    const updateStudent = this.profileForm.value;
    this.studentService.updateStudent(<StudentDetail>updateStudent).subscribe(result => {
      this.profileForm.reset();
      window.location.reload();
    });
    
  }
  
  
}
