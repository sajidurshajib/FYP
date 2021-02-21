import {
    PROFILE_DATA,
    PROFILE_NEW,
    PROFILE_UPDATE
} from '../actions/types'

const initialState={
    profileExist: false,
    profileLoading: false,
    profileData:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case PROFILE_DATA:
            return{
                ...state,
                profileExist: true,
                profileLoading: false,
                profileData:action.payload
            }
        default:
            return state
    }
}