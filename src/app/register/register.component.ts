import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup;

  firstName : string ;
  lastName : string ;
  phone : string ;
  mail : string ;
  password : string ;
  confirmPassword : string ;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm() ;
  }

  regex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,20}$';

  

  createForm() {
    this.angForm = this.fb.group({
        firstName: ['',[Validators.required]],
        lastName: ['',[Validators.required]],
        mail: ['',[Validators.required,Validators.email]],
        password: ['',[
          Validators.required,
          Validators.pattern(this.regex)
        ]],
       confirmPassword: ['',[Validators.required]],
       phone: ['',[
        Validators.required,
        Validators.pattern("[0-9 ]{10}")
      ]]
       
    });
}

}
