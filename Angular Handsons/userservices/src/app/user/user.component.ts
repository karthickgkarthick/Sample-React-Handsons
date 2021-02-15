import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
getUserdata:User[]

  constructor(public service:UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(res=>{this.getUserdata=res['data'] as User[]});
    this.service.createUser();
   
  }
  check(){
    console.log(this.getUserdata);
  }

}
