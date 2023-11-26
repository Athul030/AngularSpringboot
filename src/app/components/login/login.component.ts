import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Usercred } from 'src/app/Store/Model/User.model';
import { beginLogin } from 'src/app/Store/User/User.Action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private builder:FormBuilder, private store:Store){

  }

  loginform=this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  })

  ProceedLogin(){
    if(this.loginform.valid){
      const _obj:Usercred={
        username:this.loginform.value.username as string,
        password:this.loginform.value.password as string
      }
      this.store.dispatch(beginLogin({usercred:_obj}))
    }
  }

  resetlogin(){
    this.loginform.reset
  }
  

}
