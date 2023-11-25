import { createAction, props } from "@ngrx/store";
import { Associates } from "../Model/Associate.model";


export const LOAD_ASSOCIATE='[associate page] load associate'
export const LOAD_ASSOCIATE_SUCCESS='[associate page] load associate success'
export const LOAD_ASSOCIATE_FAIL='[associate page] load associate fail'

export const ADD_ASSOCIATE='[associate page] add associate'
export const ADD_ASSOCIATE_SUCCESS='[associate page] add associate success'

export const GET_ASSOCIATE='[associate page] get associate'
export const GET_ASSOCIATE_SUCCESS='[associate page] get associate success'

export const OPEN_POPUP='[associate page] open popup'

export const UPDATE_ASSOCIATE='[associate page] update associate'
export const UPDATE_ASSOCIATE_SUCCESS='[associate page] update associate success'

export const DELETE_ASSOCIATE='[associate page] delete associate'
export const DELETE_ASSOCIATE_SUCCESS='[associate page] delete associate success'


//loadassociate functions
export const loadassociate=createAction(LOAD_ASSOCIATE)
export const loadassociateSuccess=createAction(LOAD_ASSOCIATE_SUCCESS,props<{list:Associates[]}>())
export const loadassociateFail=createAction(LOAD_ASSOCIATE_FAIL,props<{errormessage:string}>())

//addassociate functions
export const addassociate=createAction(ADD_ASSOCIATE, props<{inputdata:Associates}>())
export const addassociateSuccess=createAction(ADD_ASSOCIATE_SUCCESS,props<{inputdata:Associates}>())

//getassociate functions
export const getassociate=createAction(GET_ASSOCIATE, props<{id:number}>())
export const getassociateSuccess=createAction(GET_ASSOCIATE_SUCCESS,props<{obj:Associates}>())

export const Openpopup=createAction(OPEN_POPUP)

//updateassociate functions
export const updateassociate=createAction(UPDATE_ASSOCIATE, props<{inputdata:Associates}>())
export const updateassociateSuccess=createAction(UPDATE_ASSOCIATE_SUCCESS,props<{inputdata:Associates}>())

//deleteassociate functions
export const deleteassociate=createAction(DELETE_ASSOCIATE, props<{code:number}>())
export const deleteassociateSuccess=createAction(DELETE_ASSOCIATE_SUCCESS,props<{code:number}>())
