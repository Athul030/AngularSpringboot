import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customerlisting',
  templateUrl: './customerlisting.component.html',
  styleUrls: ['./customerlisting.component.css']
})
export class CustomerlistingComponent {

  errormessage=''
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColums: string[] = ["code", "name", "email", "phone", "address", "type", "group", "status", "action"]

  constructor(private dialog:MatDialog, private store:Store){
    
  }
  FunctionAdd(){



  }

  FunctionEdit(code:number){
    this.OpenPopup(code, 'Update Customer');
    
  }

  FunctionDelete(code:number){

    if(confirm('do you want to remove?')){
    }
  }

  OpenPopup(code: number, title: string) {

  }
}
