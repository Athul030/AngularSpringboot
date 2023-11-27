import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Roles } from 'src/app/Store/Model/User.model';
import { getroles } from 'src/app/Store/User/User.Action';
import { getallroles } from 'src/app/Store/User/User.Selectors';

@Component({
  selector: 'app-rolepopup',
  templateUrl: './rolepopup.component.html',
  styleUrls: ['./rolepopup.component.css']
})
export class RolepopupComponent implements OnInit {

  rolelist!: Roles[]
  constructor(private builder:FormBuilder, private ref:MatDialogRef<RolepopupComponent>, private store:Store,
    @Inject(MAT_DIALOG_DATA) public data:any  ){

  }

  ngOnInit(): void {
    this.store.dispatch(getroles())
    this.store.select(getallroles).subscribe((item)=>{
      this.rolelist=item

    })
  }

  roleform=this.builder.group({
    id:this.builder.control(0),
    username:this.builder.control({value:'',disabled:true}),
    role:this.builder.control('',Validators.required)
  })

  Saveuserrole(){
    if(this.roleform.valid){

    }
  }

  closepopup(){
    this.ref.close();
  }

  

}
