import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FormcheckinComponent } from './modules/formcheckin/formcheckin.component';
import { FormcheckoutComponent } from './modules/formcheckout/formcheckout.component';



const routes: Routes = [
  //{ path: 'login', component: LoginpageComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HeaderComponent, children: [
  { path: 'checkin', component: FormcheckinComponent },
  { path: 'checkout', component: FormcheckoutComponent }
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
