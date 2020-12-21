import axios from 'axios'
import {returnErrors} from './errorAction'
import {
    USER_LOADED, 
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types'


export const register=({name, email, password, cnf_password})=>dispatch=>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({name, email, password, cnf_password})

    axios.post('/api/user/register',body,config)
        .then(res=>dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, REGISTER_FAIL))
            dispatch({
                type:REGISTER_FAIL
            })
        })        
}
