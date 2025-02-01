import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [RouterLink,SigninComponent,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  public user ={
    email:"",
    password:""
  };

  register(){
    console.log(this.user);
  }
}
