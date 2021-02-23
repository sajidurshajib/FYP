import axios from 'axios'
import {returnErrors} from './errorAction'
import {
    PROFILE_LOADING,
    PROFILE_DATA,
    PROFILE_NEW,
    PROFILE_UPDATE,
    AUTH_ERROR
} from './types'




export const loadProfile=()=>(dispatch, getState)=>{
    dispatch({type:PROFILE_LOADING})

    axios.get('/api/profile/single',tokenConfig(getState))
        .then(res=>dispatch({
            type:PROFILE_DATA,
            payload:res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, AUTH_ERROR))
            dispatch({
                type:AUTH_ERROR
            })
        })      
}



export const tokenConfig = getState =>{

    const token = getState().auth.token

    const config ={
        headers:{
            "Content-type":"application/json"
        }
    }

    if(token){
        config.headers['x-auth-token']=token
    }

    return config;
}

