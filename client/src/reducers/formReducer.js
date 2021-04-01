import {
    FORM_CREATE,
    FORM_SHOW,
    FORM_WIPE
} from '../actions/types'

const initialState={
    formLoading: false,
    formData:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case FORM_CREATE:
            return{
                ...state,
                formLoading: false,
                formData:action.payload
            }
        case FORM_WIPE:
            return{
                ...state,
                formLoading: false,
                formData:action.payload
            }
        default:
            return state
    }
}