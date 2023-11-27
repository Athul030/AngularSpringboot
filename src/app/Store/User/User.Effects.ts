import { Injectable } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { beginLogin, beginRegister, duplicateUser, duplicateUserSuccess, fetchmenu, fetchmenusuccess, getroles, getrolessuccess, getuserbycodesuccess, getuserbydcode, getusers, getuserssuccess } from "./User.Action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { showalert } from "../Common/App.Action";
import { Router } from "@angular/router";
import { Userinfo } from "../Model/User.model";


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



    _userlogin = createEffect(()=>
    this.action.pipe(
        ofType(beginLogin),
        switchMap((action)=>{
            return this.service.UserLogin(action.usercred).pipe(
                switchMap((data:Userinfo[])=>{
                    if(data.length>0){
                    const _userdata=data[0];
                    if(_userdata.status===true){
                        this.service.SetUserToLocalStorage(_userdata)
                    this.router.navigate([''])
                    return of(fetchmenu({userrole:_userdata.role}),
                    showalert({message:'Login successfully',resulttype:'pass'}))
                    }else{
                        return of(showalert({message:'Inactive User',resulttype:'fail'}))
                    }
                }else{
                    return of(showalert({message:'Login failed: Invalid credentials',resulttype:'fail'}))
                }
                }),
                
            )
        })
    )
    )


    _duplicateuser = createEffect(()=>
    this.action.pipe(
        ofType(duplicateUser),
        switchMap((action)=>{
            return this.service.Duplicateusername(action.username).pipe(
                switchMap((data)=>{
                    if(data.length>0){
                        return of(duplicateUserSuccess({isdup:true}),
                        showalert({message:'Username exists already',resulttype:'fail'}))
                    }else{
                        return of(duplicateUserSuccess({isdup:false}))
                    }   }),
                    catchError((_error) => of(showalert({ message: 'Registerion Failed due to :.' + _error.message, resulttype: 'fail' })))
            )
        })
    )
    )

    _loadmenubyrole = createEffect(()=>
    this.action.pipe(
        ofType(fetchmenu),
        exhaustMap((action)=>{
            return this.service.GetMenubyRole(action.userrole).pipe(
                map((data)=>{
                    return fetchmenusuccess({ menulist: data })
                }),
                    catchError((_error) => of(showalert({ message: 'Failed to fetch mmenu list', resulttype: 'fail' })))
                )  
                })
            )
    )


    _getallusers = createEffect(()=>
    this.action.pipe(
        ofType(getusers),
        exhaustMap((action)=>{
            return this.service.GetAllUsers().pipe(
                map((data)=>{
                    return getuserssuccess({ userlist: data })
                }),
                    catchError((_error) => of(showalert({ message: 'Failed to fetch user info', resulttype: 'fail' })))
                )  
                })
            )
    )

    _getallRoles = createEffect(()=>
    this.action.pipe(
        ofType(getroles),
        exhaustMap((action)=>{
            return this.service.GetAllRoles().pipe(
                map((data)=>{
                    return getrolessuccess({ rolelist: data })
                }),
                    catchError((_error) => of(showalert({ message: 'Failed to fetch role list', resulttype: 'fail' })))
                )  
                })
            )
    )

    _getuserbycode = createEffect(()=>
    this.action.pipe(
        ofType(getuserbydcode),
        switchMap((action)=>{
            return this.service.Duplicateusername(action.username).pipe(
                switchMap((data)=>{
                    if(data.length>0){
                        return of(getuserbycodesuccess({userinfo:data[0]}))
                    }else{
                        return of(duplicateUserSuccess({isdup:false}))
                    }   }),
                    catchError((_error) => of(showalert({ message: 'Get userbycode Failed due to :.' + _error.message, resulttype: 'fail' })))
            )
        })
    )
    )

    
}