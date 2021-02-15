import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddressModel } from '../address-model.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {


countryData:any[]=['India','US','UK'];



model:AddressModel={
  address:'',
    city:'',
    state:'',
    postcode:0,
    country:[],
    aggrement:false
}

  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(newform:NgForm){
   /*this.model.address=newform.value.userData.address;
   this.model.aggrement=newform.value.userData.aggrement;
   this.model.city=newform.value.userData.city;
   this.model.country=newform.value.userData.country;
   this.model.postcode=newform.value.userData.postcode;ALTERNATE WAY BUT YOU SHOULD USE <div ngModelGroup="userData"> after the form tag
   this.model.state=newform.value.userData.state;*/
    console.log(newform.value);
  }
}
