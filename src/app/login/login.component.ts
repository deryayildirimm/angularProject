import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // decribe the regex for password pattern to create strong password
  // - At least one lowercase
  // - At least one uppercase or one number
  // - Minimum 6 characters && Max 20 character                   
  regex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,20}$';

  angForm = this.fb.group({
    mail: ['',
    [
      Validators.required,
      Validators.email
    ],
  ],
    password: ['',
    [
      Validators.required,
      Validators.pattern(this.regex)
  ],
]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  RememberMe(){
    console.log("rememberr");
  }



}
