import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 postData= {data: {
  name: "paul rudd",
  movies: ["I Love You Man", "Role Models"]}
}


  constructor(private http:HttpClient) { }

  getAllUsers()
  {
return this.http.get('https://reqres.in/api/users?page=2');
  }
  createUser(){
   
    return this.http.post("https://reqres.in/api/users",this.postData).subscribe(data=>{console.log(data)});
  }
}
