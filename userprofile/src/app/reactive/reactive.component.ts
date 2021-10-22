import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  isShown=false;

  email = new FormControl('',{
    validators: [Validators.required, Validators.email],
  });
  password = new FormControl('',{
    validators: [Validators.required, Validators.minLength(6)]
  });
  address = new FormControl('',{
  });
  age = new FormControl('',{
  });
  number = new FormControl('',{
  });
  salary = new FormControl('',{
  });

  ngForm = new FormGroup({
    email: this.email,
    password: this.password,
    address: this.address,
    age: this.age,
    number: this.number,
    salary: this.salary,
  });

  constructor() { }

  ngOnInit(): void{
  }

  onSubmit(){
    console.log(this.ngForm.controls.email.value);
    console.log(this.ngForm.controls.password.value);
  }

  show(){
    this.isShown=!this.isShown
    }
}
