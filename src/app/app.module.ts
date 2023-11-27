import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociatelistingComponent } from './components/associatelisting/associatelisting.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { MaterialModule } from './Material.Module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { AssociateReducer } from './Store/Associate/Associate.Reducer';
import { AssociateEffects } from './Store/Associate/Associate.Effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { AppEffects } from './Store/Common/App.Effects';
import { HomeComponent } from './components/home/home.component';
import { CustomerlistingComponent } from './components/customerlisting/customerlisting.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserReducer } from './Store/User/User.Reducer';
import { UserEffects } from './Store/User/User.Effects';
import { MenubarComponent } from './components/menubar/menubar.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { RolepopupComponent } from './components/rolepopup/rolepopup.component';

@NgModule({
  declarations: [
    AppComponent,
    AssociatelistingComponent,
    AddassociateComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CustomerlistingComponent,
    MenubarComponent,
    UserlistComponent,
    RolepopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({associate:AssociateReducer,user:UserReducer}),
    EffectsModule.forRoot([AssociateEffects,AppEffects,UserEffects]),
    StoreDevtoolsModule.instrument({maxAge:25,logOnly: !isDevMode() }),
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
