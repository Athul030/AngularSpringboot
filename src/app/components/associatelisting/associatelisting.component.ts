import { Component, OnInit, ViewChild } from '@angular/core';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Associates } from 'src/app/Store/Model/Associate.model';
import { getassociatelist } from 'src/app/Store/Associate/Associate.Selector';
import { Openpopup, deleteassociate, getassociate, loadassociate } from 'src/app/Store/Associate/Associate.Action';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-associatelisting',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.css']
})
export class AssociatelistingComponent implements OnInit {

  constructor(private dialog:MatDialog, private store: Store){

  }

  Associatelist!: Associates[];
  datasource:any;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  displayedColumns:string[]=["code","name","email","phone","address","type","group","status","action"]
  ngOnInit(): void {
    this.store.dispatch(loadassociate())
    this.store.select(getassociatelist).subscribe(item =>{
      this.Associatelist=item;
      this.datasource=new MatTableDataSource<Associates>(this.Associatelist);
      this.datasource.paginator=this.paginator;
      this.datasource.sort=this.sort;
    })
  }

  FunctionAdd(){
    this.Openpopup(0,'Create Assoicate')
  }

  FunctionEdit(code:number){
    this.Openpopup(0,'Edit Assoicate')
    this.store.dispatch(getassociate({id:code}))


  }

  FunctionDelete(code:number){
    if(confirm('do you want to remove?')){
      this.store.dispatch(deleteassociate({code:code}))
    }
  }

  Openpopup(code:number,title:string){
    this.store.dispatch(Openpopup())
    this.dialog.open(AddassociateComponent,{
      width:'50%',
      enterAnimationDuration:'600ms',
      exitAnimationDuration:'1000ms',
      data:{
        code:code,
        title:title
      }
    })
  }

  

}
