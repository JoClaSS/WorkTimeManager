import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Check } from 'src/app/shared/model/check';
import { Person } from 'src/app/shared/model/person';
import { PersonService } from 'src/app/shared/service/person.service';

@Component({
  selector: 'app-formcheckin',
  templateUrl: './formcheckin.component.html',
  styleUrls: ['./formcheckin.component.css']
})
export class FormcheckinComponent implements OnInit {
  personArray: Person[] = [];
  uniquePerson!: Person;
  checks!: Check;
  selected!: string;
  public inForm!: FormGroup;

  constructor(private fb: FormBuilder,
    public personService: PersonService,
  ) { }

  formulario() {
    this.inForm = this.fb.group({
      fullName: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      today: ['', [Validators.required]],
      checkin: ['', [Validators.required]]
    });
  }

  showAllPersons() {
    this.personService.getAll().subscribe((dados: Person[]) => {
      this.personArray = dados;
      console.log(dados);
    })
  }

  fillForm(name: string) {
    this.personService.getPersonByFullName(name).subscribe((dados: Person) => {
      this.uniquePerson = dados;
      this.inForm.get(name)?.setValue({
        sexo : this.inForm.value.sexo,
        cpf : this.inForm.value.cpf,
        email : this.inForm.value.email,
        telefone : this.inForm.value.telefone,
        birthDate : this.inForm.value.birthDate
      });
    })
   }


  ngOnInit(): void {
    this.showAllPersons();
    this.formulario();
    this.fillForm(this.formulario.name);
  }

}
