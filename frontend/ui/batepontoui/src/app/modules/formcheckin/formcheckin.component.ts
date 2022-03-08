import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Check } from 'src/app/shared/model/check';
import { Person } from 'src/app/shared/model/person';

@Component({
  selector: 'app-formcheckin',
  templateUrl: './formcheckin.component.html',
  styleUrls: ['./formcheckin.component.css']
})
export class FormcheckinComponent implements OnInit {
  personArray: Person[] = [];
  checks!: Check;
  selected!:string;
  public inForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  formulario(){
    this.inForm = this.fb.group({
      fullName: ['Jéssica Motossera', [Validators.required]],
      sexo: ['Feminino'],
      cpf: ['12345678910'],
      email: ['jess@email.com'],
      telefone: ['123456789'],
      birthDate: ['12/12/2012'],
      today: ['08/03/2022', [Validators.required]],
      checkin: ['12:40', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.formulario();
  }

}
