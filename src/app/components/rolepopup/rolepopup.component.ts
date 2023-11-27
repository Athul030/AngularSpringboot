import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Roles, Userinfo } from 'src/app/Store/Model/User.model';
import { getroles, getuserbydcode, updateuserrole } from 'src/app/Store/User/User.Action';
import { getUserbydcode, getallroles } from 'src/app/Store/User/User.Selectors';

@Component({
  selector: 'app-rolepopup',
  templateUrl: './rolepopup.component.html',
  styleUrls: ['./rolepopup.component.css']
})
export class RolepopupComponent implements OnInit {

  rolelist!: Roles[]
  userinfo!: Userinfo;
  constructor(private builder:FormBuilder, private ref:MatDialogRef<RolepopupComponent>, private store:Store,
    @Inject(MAT_DIALOG_DATA) public data:any  ){

  }

  ngOnInit(): void {
    this.store.dispatch(getroles())
    this.store.select(getallroles).subscribe((item)=>{
      this.rolelist=item

    })
    if(this.data!=null){
      this.store.dispatch(getuserbydcode({username:this.data.code}))
      this.store.select(getUserbydcode).subscribe((item)=>{
        this.userinfo=item;
        this.roleform.setValue({
          username:this.userinfo.role,
          role:this.userinfo.role,
          id:this.userinfo.id
        })
      })

    }
  }

  roleform=this.builder.group({
    id:this.builder.control(0),
    username:this.builder.control({value:'',disabled:true}),
    role:this.builder.control('',Validators.required)
  })

  Saveuserrole(){
    if(this.roleform.valid){
      this.store.dispatch(updateuserrole({userrole:this.roleform.value.role as string, 
        userid:this.roleform.value.id as number}))
        this.closepopup()
    }
  }

  closepopup(){
    this.ref.close();
  }

  

}
