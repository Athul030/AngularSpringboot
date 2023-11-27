import { createReducer, on } from "@ngrx/store";
import { UserAdapter, UserState } from "./User.State";
import { duplicateUserSuccess, fetchmenusuccess, getrolessuccess, getuserbycodesuccess, getuserssuccess } from "./User.Action";

const _userReducer= createReducer(UserState,
    on(duplicateUserSuccess,(state,action)=>{
        return { ...state,isDuplicate:action.isdup}
    }),
    on(fetchmenusuccess,(state,action)=>{
        return { ...state, menulist: action.menulist}
    }),
    on(getuserssuccess,(state,action)=>{
        return UserAdapter.setAll(action.userlist,state)
    }),
    on(getrolessuccess,(state,action)=>{
        return { ...state, roles: action.rolelist}
    }),
    on(getuserbycodesuccess,(state,action)=>{
        return { ...state, userinfo: action.userinfo}
    })
)

export function UserReducer(state:any,action:any){

    return _userReducer(state, action);

   
}