import axios from 'axios'
import {returnErrors} from './errorAction'
import {
    PROFILE_LOADING,
    PROFILE_DATA,
    PROFILE_NEW,
    PROFILE_UPDATE,
    PROFILE_WIPE
} from './types'




export const loadProfile=()=>(dispatch, getState)=>{
    dispatch({type:PROFILE_LOADING})

    axios.get('/api/profile/single',tokenConfig(getState))
        .then(res=>dispatch({
            type:PROFILE_DATA,
            payload:res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, PROFILE_WIPE))
            dispatch({
                type:PROFILE_WIPE
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


export const profileWipe=()=>{
    return {
        type:PROFILE_WIPE
    }
}
