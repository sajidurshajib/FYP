import axios from 'axios'
import {returnErrors} from './errorAction'
import {
    DATA_CREATED,
    DATA_WIPE
} from './types'


export const dataWipe =()=>async (dispatch)=>{
    dispatch({type:DATA_WIPE})
}


export const newData=({form_foreign, data})=>(dispatch,getState)=>{

    const body = JSON.stringify({form_foreign,data})
    
    axios.post('/api/data/set',body,tokenConfig(getState))
        .then(res=>dispatch({
            type: DATA_CREATED,
            payload: res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, DATA_WIPE))
            dispatch({
                type:DATA_WIPE
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


