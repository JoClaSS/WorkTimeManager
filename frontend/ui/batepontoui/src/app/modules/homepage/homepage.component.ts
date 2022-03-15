import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Check } from 'src/app/shared/model/check';
import { Person } from 'src/app/shared/model/person';
import { PersonService } from 'src/app/shared/service/person.service';
import { CheckService } from 'src/app/shared/service/check.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  personArray: Person[] = [];
  aCheck!: Check;
  checks: Check[] = [];
  getchecksForm!: FormGroup;
  showChecksDashboard!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public personService: PersonService,
    public checkService: CheckService) { }

    formulario() {
    this.getchecksForm = this.fb.group({
      fullName: ['', [Validators.required]]
    });
    this.showChecksDashboard = this.fb.group({
      day:['', [Validators.required]],
      checkIn: ['', [Validators.required]],
      checkOut: ['', [Validators.required]]
    });
  }

  showChecks() {
    let name = this.getchecksForm.get('fullName')?.value;
    this.checkService.getChecksByName(name).subscribe((dados:Check[]) => {
      this.checks = dados;
      console.log(this.checks);
    })
  }

  showAllPersons() {
    this.personService.getAll().subscribe((dados: Person[]) => {
      this.personArray = dados;
    })
  }

  ngOnInit(): void {
    this.formulario();
    this.showAllPersons();
  }

}
