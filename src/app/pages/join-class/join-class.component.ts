import { Component } from '@angular/core';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';
import { RouteConfigLoadEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-join-class',
  imports: [JoinClassComponent,RouterLink,FormsModule],
  templateUrl: './join-class.component.html',
  styleUrl: './join-class.component.css'
})
export class JoinClassComponent {
    public joinclass={
      classid:null,
      classname:null,
      classTeacherName:null
    }

    joinClass(){
      console.log(this.joinclass);
    }
}
