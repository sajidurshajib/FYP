import {
    FORM_CREATE,
    FORM_SHOW,
    FORM_WIPE
} from '../actions/types'

const initialState={
    formExist: false,
    formLoading: false,
    formData:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case FORM_CREATE:
            return{
                ...state,
                formExist: true,
                formLoading: false,
                formData:action.payload
            }
        default:
            return state
    }
}