import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormcheckinComponent } from './formcheckin/formcheckin.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormcheckoutComponent } from './formcheckout/formcheckout.component';
import {MatButtonModule} from '@angular/material/button';
import {FormpersonComponent } from './formperson/formperson.component';
import {HomepageComponent } from './homepage/homepage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    FormcheckinComponent,
    FormcheckoutComponent,
    FormpersonComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class ModulesModule { }
