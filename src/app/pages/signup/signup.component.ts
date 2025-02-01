import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [SignupComponent,RouterLink,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public user={
    accountType:null, 
    email:null,
    firstName:null,
    lastName:null,
    password:null,
    address:null,
    dateOfBirth:Date,
    gender:null,
    mobileNumber:null,
    eduQualification:null
  }
}
