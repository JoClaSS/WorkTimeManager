import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/shared/model/person';
import { PersonService } from 'src/app/shared/service/person.service';


@Component({
  selector: 'app-formperson',
  templateUrl: './formperson.component.html',
  styleUrls: ['./formperson.component.css']
})
export class FormpersonComponent implements OnInit {
  personArray: Person[] = [];
  selected!: string;
  personForm!: FormGroup;

  constructor(private fb: FormBuilder,
    public personService: PersonService
  ) { }

  formulario() {
    this.personForm = this.fb.group({
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      birthDate: ['', [Validators.required]]
    });
  }

   save(): void {
    let formValue = this.personForm.value;
    console.log(formValue);
    this.personService.save(formValue).subscribe(data => {
    this.personArray.push(data);})
  }

  ngOnInit(): void {
    this.formulario();
  }

}
