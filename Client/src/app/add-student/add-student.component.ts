import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  add : boolean =false;

  onClick():void{
    this.add=!this.add;
  }

}
