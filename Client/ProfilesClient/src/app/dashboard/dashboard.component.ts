import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { StudentDetailComponent } from "../student-detail/student-detail.component";
import { AddStudentComponent } from "../add-student/add-student.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [NavbarComponent, StudentDetailComponent, AddStudentComponent]
})
export class DashboardComponent {

}
