import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service:ApiService){}
  ngOnInit():void{
this.service.fetchData().subscribe(res=>{console.log(res)});
  }
}
