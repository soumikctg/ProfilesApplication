import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StudentDetail } from '../student-detail';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnChanges{
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
