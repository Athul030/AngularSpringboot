import { createReducer, on } from "@ngrx/store";
import { Openpopup, addassociateSuccess, deleteassociateSuccess, getassociateSuccess, loadassociateFail, loadassociateSuccess, updateassociateSuccess } from "./Associate.Action";
import { AssociateState } from "./Associate.State";


const _AssoicateReducer=createReducer(AssociateState,
    on(loadassociateSuccess,(state,action)=>{
        return{
            ...state,
            list:[...action.list],
            errormessage:''
        }
    }),
    on(getassociateSuccess,(state,action)=>{
        return{
            ...state,
            associateobj:action.obj,
            errormessage:''
        }
    }),
    on(loadassociateFail,(state,action)=>{
        return{
            ...state,
            list:[],
            errormessage:action.errormessage
        }
    }),
    on(Openpopup,(state,action)=>{
        return{
            ...state,
            associateobj:{
                id: 0,
                name: "",
                email: "",
                phone: "",
                type: "CUSTOMER",
                address: "",
                associategroup: "level1",
                status: true
            },
        }
    }),

    on(addassociateSuccess,(state,action)=>{
        const _maxid=Math.max(...state.list.map(o=>o.id))
        const _newdata={...action.inputdata}
        _newdata.id=_maxid+1
        return {
            ...state,
            list:[...state.list,_newdata],
            errormessage:''

        }
    }),

    on(updateassociateSuccess,(state,action) => {
        const _newdata=state.list.map(o => {
            return o.id === action.inputdata.id ? action.inputdata:o
        })
       
        return {
            ...state,
            list: _newdata,
            errormessage:''
        }
    }),
    
    on(deleteassociateSuccess,(state,action) => {
        const _newdata=state.list.filter((o)=>o.id!==action.code)
        return {
            ...state,
            list: _newdata,
            errormessage:''
        }
    })

    )


export function AssociateReducer(state:any,action:any){
    return _AssoicateReducer(state,action)
}