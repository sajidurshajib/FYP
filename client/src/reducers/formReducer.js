import {
    FORM_LOADING,
    FORM_CREATE,
    FORM_SHOW,
    FORM_WIPE,
    FORM_PERSONAL
} from '../actions/types'

const initialState={
    formLoading: false,
    formData:{},
    formAll:{},
    formPersonal:{}
}

export default function(state=initialState, action){
    switch(action.type){
        case FORM_LOADING:
            return{
                ...state,
                formLoading:true
            }
        case FORM_CREATE:
            return{
                ...state,
                formData:action.payload
            }
        case FORM_SHOW:
            return{
                ...state,
                formLoading: false,
                formAll:action.payload
            }
        case FORM_PERSONAL:
            return{
                ...state,
                formPersonal:action.payload
            }
        case FORM_WIPE:
            return{
                ...state,
                formLoading: false,
                formData:{}
            }
        default:
            return state
    }
}