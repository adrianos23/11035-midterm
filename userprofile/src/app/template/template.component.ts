import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  isShown=false;

  myName = "";
  myAddress = "";
  myAge = "";
  salary = "";
  number = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: NgForm){
    console.log(value.value, value.valid);
  }

  show(){
    this.isShown=!this.isShown
    }
}
