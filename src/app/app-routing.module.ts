import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatelistingComponent } from './components/associatelisting/associatelisting.component';
import { CustomerlistingComponent } from './components/customerlisting/customerlisting.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:AssociatelistingComponent},
  {path:'associate',component:AssociatelistingComponent},
  {path:'customer',component:CustomerlistingComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
