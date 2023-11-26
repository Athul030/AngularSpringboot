import { Injectable } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { beginRegister } from "./User.Action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { showalert } from "../Common/App.Action";
import { Router } from "@angular/router";


@Injectable()
export class UserEffects{

    constructor(private action:Actions, private service:UserService,private router:Router){

    }


    //createEffect is a function provided by NgRx that creates an observable effect
    _userregister = createEffect(()=>
    //this.action is an observable represeting a stream of NgRx actions
    //.pipe() is used to chain a series of RxJS operators on the action stream
    this.action.pipe(
        //operator from NgRx that filters the action stream to only allow actions of type beginRegister
        ofType(beginRegister),
        //RxJs opr that maps each value (action) to an observable
        exhaustMap((action)=>{
            return this.service.UserRegistration(action.userdata).pipe(
                //to transform successfull result of HTTP into a new action
                map(()=>{
                    this.router.navigate(['login'])
                    return showalert({message:'Registered successfully',resulttype:'pass'})
                }),
                //if an error occur, it returns an observable of an empty action ('of())
                // catchError((_error)=>of(showalert({message:'Registration Failed due to: '+_error.message,resulttype:'fail'})))

                catchError((error) => {
                    console.error('Registration Failed:', error); // Log the error to the console for debugging
                    return of(showalert({ message: 'Registration Failed due to: ' + error.message, resulttype: 'fail' }));
                  })
            )
        })
    )
    )
}