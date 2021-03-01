import {
    PROFILE_LOADING,
    PROFILE_DATA,
    PROFILE_NEW,
    PROFILE_UPDATE,
    PROFILE_WIPE
} from '../actions/types'

const initialState={
    profileExist: false,
    profileLoading: false,
    profileData:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case PROFILE_DATA:
        case PROFILE_NEW:
        case PROFILE_UPDATE:
            return{
                ...state,
                profileExist: true,
                profileLoading: false,
                profileData:action.payload
            }
        case PROFILE_WIPE:
            return{
                ...state,
                profileExist: false,
                profileLoading: false,
                profileData:[]
            }
        case PROFILE_LOADING:
            return{
                ...state,
                profileLoading:true
            }
        default:
            return state
    }
}