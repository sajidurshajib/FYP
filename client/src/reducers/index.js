import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import formReducer from './formReducer'
import dataReducer from './dataReducer'

export default combineReducers({
    error: errorReducer,
    auth:authReducer,
    profile: profileReducer,
    form: formReducer,
    data: dataReducer
})