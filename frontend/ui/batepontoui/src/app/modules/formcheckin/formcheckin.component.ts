import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Check } from 'src/app/shared/model/check';
import { Person } from 'src/app/shared/model/person';
import { PersonService } from 'src/app/shared/service/person.service';
import { CheckService } from 'src/app/shared/service/check.service';

@Component({
  selector: 'app-formcheckin',
  templateUrl: './formcheckin.component.html',
  styleUrls: ['./formcheckin.component.css']
})
export class FormcheckinComponent implements OnInit {
  personArray: Person[] = [];
  uniquePerson!: Person;
  checks: Check[] = [];
  selected!: string;
  inForm!: FormGroup;
  postForm!: FormGroup;

  constructor(private fb: FormBuilder,
    public personService: PersonService,
    public checkService: CheckService,
  ) { }

  formulario() {
    this.inForm = this.fb.group({
      fullName: ['', [Validators.required]],
      endereço: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      today: ['', [Validators.required]],
      checkin: ['', [Validators.required]]
    });
    this.postForm = this.fb.group({
      person: ['', [Validators.required]],
      checkIn: ['', [Validators.required]]
    });
  }

  showAllPersons() {
    this.personService.getAll().subscribe((dados: Person[]) => {
      this.personArray = dados;
    })
  }


  fillForm() {
    let name  = this.inForm.get('fullName')?.value;
    this.personService.getPersonByFullName(name).subscribe((dados: Person) => {
      this.uniquePerson = dados;
      console.log(dados);
      this.inForm.patchValue({
        endereço: dados.address,
        sexo: dados.gender,
        cpf: dados.cpf,
        email: dados.email,
        telefone: dados.phone,
        birthDate: dados.birthDate
      });
    })
    console.log(this.inForm);
  }


  save(): void {
    this.postForm.value.person = this.inForm.value.fullName;
    this.postForm.value.checkIn = this.inForm.value.today + " " + this.inForm.value.checkin;
    const form = this.postForm.value;
    console.log(form);
    this.checkService.saveCheckIn(form).subscribe(data => {
      this.checks.push(data);
    })
  }

  ngOnInit(): void {
    this.showAllPersons();
    this.formulario();
  }

}
