
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userInfo } from '../models/userInfoModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserLoggedIn: boolean = false;

  constructor(private store: Store, private http: HttpClient) { }
  
 
}
