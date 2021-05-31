import {
    DATA_CREATED,
    DATA_WIPE
} from '../actions/types'

const initialState={
    dataCreated:{}
}

export default function(state=initialState, action){
    switch(action.type){
        case DATA_CREATED:
            return{
                ...state,
                dataCreated:action.payload
            }
        case DATA_WIPE:
            return{
                ...state,
                dataCreated:{}
            }
        default:
            return state
    }
}