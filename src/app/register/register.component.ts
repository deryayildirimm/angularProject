import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  angForm = this.fb.group({
    mail: ['',
    [
      Validators.required,
      Validators.email
    ],
  ],
    password: ['',
    [
      Validators.required
  ],
]
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
