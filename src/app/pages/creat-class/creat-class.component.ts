import { Component } from '@angular/core';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-creat-class',
  imports: [CreatClassComponent,RouterLink,FormsModule],
  templateUrl: './creat-class.component.html',
  styleUrl: './creat-class.component.css'
})
export class CreatClassComponent {
  public class = {
    id:null,
    lec_name:null,
    class_name:null,
    day:null,
    starting_time:null,
    duration:null
  }

  createclass(){
    console.log(this.class);
  }
}
