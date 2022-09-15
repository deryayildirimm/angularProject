import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  productData:any;

  

  constructor(private http : HttpClient) {}

  ngOnInit(){

    this.http.get<any>("assets/product.json").subscribe((data)=>
    this.productData = data
  )

  
   
  }

}
