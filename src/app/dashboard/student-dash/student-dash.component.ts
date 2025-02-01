import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JoinClassComponent } from '../../pages/join-class/join-class.component';

@Component({
  selector: 'app-student-dash',
  imports: [StudentDashComponent,RouterLink],
  templateUrl: './student-dash.component.html',
  styleUrl: './student-dash.component.css'
})
export class StudentDashComponent {

}
