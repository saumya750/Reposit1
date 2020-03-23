import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-wedding-form',
  templateUrl: './wedding-form.component.html',
  styleUrls: ['./wedding-form.component.css']
})
export class WeddingFormComponent implements OnInit {

  weddingForm : FormGroup;
  CountryList:string[]=['India','US','UK'];
  StateList:string[]=['a','b','c','d','e'];
  CityList:string[]=['1','2','3','4','5','6','7'];

  constructor() { }

  ngOnInit() {
    this.weddingForm= new FormGroup({
      'Country':new FormControl(),
      'State':new FormControl(),
      'City': new FormControl(),
      'weddingVenue':new FormControl(),
      
    });
  }

}
