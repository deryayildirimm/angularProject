import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
//import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../services/authentication.service';
import { Select, Store } from '@ngxs/store';
import { Login } from '../state/loginn.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  angForm !: FormGroup;

  password !: string ;
  email !: string ;

  rememberMe !: boolean ;

  constructor(private fb: FormBuilder,
    private service : AuthenticationService,
    private store:Store
    ) {

  }


  ngOnInit(): void {
    this.checkLogin(); 

  }

  // decribe the regex for password pattern to create strong password
  // - At least one lowercase
  // - At least one uppercase or one number
  // - Minimum 6 characters && Max 20 character                   
  regex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,20}$';

  checkLogin() {

    this.angForm = this.fb.group({
      email: ['',
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
    });

    localStorage.setItem('remember' , JSON.stringify(this.angForm.value)) ;

  }

  
  remember(){
    this.rememberMe = !this.rememberMe;
  }

  login(){
    this.store.dispatch( new Login( {
      mail : this.angForm.get('email')?.value,
      password: this.angForm.get('password')?.value,
      rememberMe : this.rememberMe 
    })).subscribe() ;
  }


}
