import {Injectable} from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AssociateService } from 'src/app/service/associate.service';
import { addassociate, addassociateSuccess, deleteassociate, deleteassociateSuccess, getassociate, getassociateSuccess, loadassociate, loadassociateFail, loadassociateSuccess, updateassociate, updateassociateSuccess } from './Associate.Action';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { showalert } from '../Common/App.Action';

@Injectable()
export class AssociateEffects{

    constructor(private action:Actions,
        private service: AssociateService){
            
    }

    _loadassociate=createEffect(()=>
        this.action.pipe(
            ofType(loadassociate),
            exhaustMap((action)=>{
                return this.service.GetAll().pipe(
                    map((data)=>{
                        return loadassociateSuccess({ list:data })
                    }),
                    catchError((_error)=>of(loadassociateFail({errormessage:_error.message})))
                )
            })
        )
    )

    _addassociate=createEffect(()=>
        this.action.pipe(
            ofType(addassociate),
            switchMap((action)=>{
                return this.service.Create(action.inputdata).pipe(
                    switchMap((data)=>{
                        return of(addassociateSuccess({ inputdata:action.inputdata }),
                        showalert({message:'Created successfully',resulttype: 'pass'}))
                    }),
                    catchError((_error) => of(showalert({message:'Failed to create associate',resulttype:'fail'})))
                )
            })
        )
    )

    _getassociate=createEffect(()=>
        this.action.pipe(
            ofType(getassociate),
            switchMap((action)=>{
                return this.service.Getbycode(action.id).pipe(
                    map((data)=>{
                        return getassociateSuccess({ obj:data })
                    }),
                    catchError((_error) => of(showalert({message:'Failed to fetch data:'+_error.message,resulttype:'fail'})))
                )
            })
        )
    )

    _updateassociate=createEffect(()=>
        this.action.pipe(
            ofType(updateassociate),
            switchMap((action)=>{
                return this.service.Update(action.inputdata).pipe(
                    switchMap((data)=>{
                        return of(updateassociateSuccess({ inputdata:action.inputdata }),
                        showalert({message:'Updated successfully',resulttype: 'pass'}))
                    }),
                    catchError((_error) => of(showalert({message:'Failed to update associate',resulttype:'fail'})))
                )
            })
        )
    )

    _deleteassociate=createEffect(()=>
        this.action.pipe(
            ofType(deleteassociate),
            switchMap((action)=>{
                return this.service.Delete(action.code).pipe(
                    switchMap((data)=>{
                        return of(deleteassociateSuccess({ code:action.code }),
                        showalert({message:'Deleted successfully',resulttype: 'pass'}))
                    }),
                    catchError((_error) => of(showalert({message:'Failed to delete associate',resulttype:'fail'})))
                )
            })
        )
    )


    
}