import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import formReducer from './formReducer'

export default combineReducers({
    error: errorReducer,
    auth:authReducer,
    profile: profileReducer,
    form: formReducer
})