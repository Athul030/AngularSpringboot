import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder){
    
  }

  registerform=this.builder.group({
    username:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    password:this.builder.control('',Validators.required),
    confirmpassword:this.builder.control('',Validators.required),
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    phone:this.builder.control('',[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    gender:this.builder.control('MALE',Validators.required),

  })

  Proceedregister(){
    if(this.registerform.valid){
      
    }

  }

  FunctionDuplicateUser(){

  }
}
