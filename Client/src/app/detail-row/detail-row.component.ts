import { Component,Input } from '@angular/core';
import { StudentDetail } from '../student-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-row.component.html',
  styleUrl: './detail-row.component.css'
})
export class DetailRowComponent {
  @Input() student!: StudentDetail;

    action : boolean = false;

  onClick(){
    this.action=!this.action;
  }
}
