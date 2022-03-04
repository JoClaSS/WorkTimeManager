import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/shared/model/person';

@Component({
  selector: 'app-formcheckin',
  templateUrl: './formcheckin.component.html',
  styleUrls: ['./formcheckin.component.css']
})
export class FormcheckinComponent implements OnInit {
  personArray: Person[] | undefined;
  selected!:string;
  public inForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
