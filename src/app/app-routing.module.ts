import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatelistingComponent } from './components/associatelisting/associatelisting.component';
import { CustomerlistingComponent } from './components/customerlisting/customerlisting.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guard/auth.guard';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[authGuard]},
  {path:'associate',component:AssociatelistingComponent,canActivate:[authGuard]},
  {path:'customer',component:CustomerlistingComponent,canActivate:[authGuard]},
  {path:'user',component:UserlistComponent,canActivate:[authGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
