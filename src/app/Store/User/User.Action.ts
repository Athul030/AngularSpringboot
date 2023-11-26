import { createAction, props } from "@ngrx/store"
import { Usercred, Users } from "../Model/User.model"


export const BEGIN_REGISTER='[auth] begin register'
export const BEGIN_LOGIN='[auth] login register'




export const beginRegister=createAction(BEGIN_REGISTER,props<{userdata:Users}>())
export const beginLogin=createAction(BEGIN_LOGIN,props<{usercred:Usercred}>())



