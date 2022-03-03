import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormcheckinComponent } from './formcheckin/formcheckin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    FormcheckinComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    FormcheckinComponent
  ]
})
export class ModulesModule { }
