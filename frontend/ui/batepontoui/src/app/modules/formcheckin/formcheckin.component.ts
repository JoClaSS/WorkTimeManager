import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcheckin',
  templateUrl: './formcheckin.component.html',
  styleUrls: ['./formcheckin.component.css']
})
export class FormcheckinComponent implements OnInit {
  public inForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
