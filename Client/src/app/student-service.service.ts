import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetail } from './student-detail';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }
  apiUrl ="http://localhost:5280";

  getAllStudent(){
    return this.http.get<StudentDetail[]>(this.apiUrl+"/api/Student/GetStudents")
  }
}
