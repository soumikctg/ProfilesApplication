import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetail } from './student-detail';
import {Observable} from "rxjs";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {



  constructor(private http:HttpClient) { }
  apiUrl ="http://localhost:5280";

  getAllStudent(){
    return this.http.get<StudentDetail[]>(this.apiUrl+"/api/Student/GetStudents")
  }

  getStudentById(studentId:string):Observable<StudentDetail>{
    return this.http.get<StudentDetail>(`${this.apiUrl}/api/Student/GetStudentById?id=${studentId}`)
  }

  addStudent(student: StudentDetail): Observable<StudentDetail>{
    return this.http.post<StudentDetail>(this.apiUrl+"/api/Student/AddStudent", student);
  }

  updateStudent(student: StudentDetail): Observable<StudentDetail>{
    return this.http.put<StudentDetail>(`${this.apiUrl}/api/Student/UpdateStudent?id=${student.Id}`, student);
  }

  deleteStudent(studentId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/api/Student/DeleteStudent?id=${studentId}`);
  }

  deleteAllStudent():Observable<string>{
    return this.http.delete(`${this.apiUrl}/api/Student/DeleteAllStudent`, {responseType:'text'});
  }

  getPagedStudents(page:number,pageSize:number):Observable<StudentDetail[]>{
    return this.http.get<StudentDetail[]>(`${this.apiUrl}/api/Student/Pagination?page=${page}&pageSize=${pageSize}`)
  }
}
