import { createAction, props } from "@ngrx/store"
import { Menus, Roleaccess, Roles, Usercred, Userinfo, Users } from "../Model/User.model"


export const BEGIN_REGISTER='[auth] begin register'
export const BEGIN_LOGIN='[auth] login register'

export const DUPLICATE_USER='[user] duplicate user'
export const DUPLICATE_USER_SUCC='[user] duplicate user succ'


export const FETCH_MENU='[user] fetch menu'
export const FETCH_MENU_SUCC='[user] fetch menu succ'


export const GET_USERS='[user] get user'
export const GET_USERS_SUCC='[user] get user succ'

export const GET_ROLES='[user] get roles'
export const GET_ROLES_SUCC='[user] get roles succ'

export const GET_USERBYCODE='[user] get userbycode'
export const GET_USERBYCODE_SUCC='[user] get userbycode succ'


export const beginRegister=createAction(BEGIN_REGISTER,props<{userdata:Users}>())
export const beginLogin=createAction(BEGIN_LOGIN,props<{usercred:Usercred}>())

export const duplicateUser=createAction(DUPLICATE_USER,props<{username:string}>())
export const duplicateUserSuccess=createAction(DUPLICATE_USER_SUCC,props<{isdup:boolean}>())


export const fetchmenu=createAction(FETCH_MENU,props<{userrole:string}>())
export const fetchmenusuccess=createAction(FETCH_MENU_SUCC,props<{menulist:Roleaccess[]}>())

export const getusers=createAction(GET_USERS)
export const getuserssuccess=createAction(GET_USERS_SUCC,props<{userlist:Users[]}>())

export const getroles=createAction(GET_ROLES)
export const getrolessuccess=createAction(GET_ROLES_SUCC,props<{rolelist:Roles[]}>())

export const getuserbydcode=createAction(GET_USERBYCODE,props<{username:string}>())
export const getuserbycodesuccess=createAction(GET_USERBYCODE_SUCC,props<{userinfo:Userinfo}>())


