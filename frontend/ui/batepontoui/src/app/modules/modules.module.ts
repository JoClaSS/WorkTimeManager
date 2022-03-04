import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormcheckinComponent } from './formcheckin/formcheckin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    FormcheckinComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    FormcheckinComponent
  ]
})
export class ModulesModule { }
