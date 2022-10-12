import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.f()
  }

  f=()=>{
    this.api.user().subscribe(
      (data)=>{
        this.userData=data
      }
    )
  }


  userData:any={}
  ngOnInit(): void {
  }

}
