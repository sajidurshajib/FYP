import {
    PROFILE_DATA,
    PROFILE_NEW,
    PROFILE_UPDATE
} from '../actions/types'

const initialState={
    isExist: null,
    isLoading: false,
    userData:null
}

export default function(state=initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user:action.payload
            }
        default:
            return state
    }
}