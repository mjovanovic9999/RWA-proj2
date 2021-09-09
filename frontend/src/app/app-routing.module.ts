import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

import { LoginComponent } from './start-screen/components/login/login.component';
import { NewAccountComponent } from './start-screen/components/new-account/new-account.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'newaccount', component: NewAccountComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
