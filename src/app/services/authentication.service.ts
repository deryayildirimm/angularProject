
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userInfo } from '../models/userInfoModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserLoggedIn: boolean = false;

  constructor() { }

 
}
