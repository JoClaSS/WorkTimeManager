import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/shared/model/person';

@Component({
  selector: 'app-formcheckout',
  templateUrl: './formcheckout.component.html',
  styleUrls: ['./formcheckout.component.css']
})
export class FormcheckoutComponent implements OnInit {
  personArray: Person[] | undefined;
  selected!:string;
  public outForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
