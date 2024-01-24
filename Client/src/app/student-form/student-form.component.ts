import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {StudentServiceService} from "../student-service.service";
import {StudentDetail} from "../student-detail";

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  profileForm = new FormGroup({
    ID:new FormControl(null),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Contact: new FormControl(''),
    Address: new FormControl(''),
    Department: new FormControl('')
  })


  constructor(private studentService: StudentServiceService) {
    this.profileForm.get('ID')?.setValue(null);
  }
  addStudent(){
    const newStudent = this.profileForm.value;
    console.log(newStudent);
    this.studentService.addStudent(<StudentDetail>newStudent).subscribe(result =>{
      this.profileForm.reset();
    })
  }
}
