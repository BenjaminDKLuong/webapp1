import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  minDate;
  maxDate = new Date(2020, 0, 1);

  constructor() { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear()-18)
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }


}
