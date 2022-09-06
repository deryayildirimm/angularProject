import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'littleBird';


  userObject = {
    name : 'Derya' ,
    age :'22'
  }

  constructor(
   private httpService : HttpService
  ){ }

  handleEvent(event : any){
    console.log(event) ;
    /*
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) =>{
      console.log(response) ;
    })
    */
    console.log("Button Clicked");
  }
}
