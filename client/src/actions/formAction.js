import axios from 'axios'
import {returnErrors} from './errorAction'
import {
    FORM_LOADING,
    FORM_CREATE,
    FORM_SHOW,
    FORM_WIPE
} from './types'



export const loadForm=()=>async (dispatch)=>{
    dispatch({type:FORM_LOADING})

    await axios.get('/api/form/all')
        .then(res=>dispatch({
            type:FORM_SHOW,
            payload:res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, FORM_WIPE))
            dispatch({
                type:FORM_WIPE
            })
        })      
}


export const formDataWipe =()=>async (dispatch)=>{
    dispatch({type:FORM_WIPE})
}



export const singleForm=(id)=>(dispatch)=>{
    dispatch({type:FORM_LOADING})

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }


    const body = JSON.stringify({id})

    
    
    axios.post('/api/form/single',body,config)
        .then(res=>dispatch({
            type: FORM_SHOW,
            payload: res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, FORM_WIPE))
            dispatch({
                type:FORM_WIPE
            })
        })
        
}






export const newForm=({title,description,form_data, form_submit})=>(dispatch,getState)=>{

    const body = JSON.stringify({title,description,form_data, form_submit})
    
    axios.post('/api/form',body,tokenConfig(getState))
        .then(res=>dispatch({
            type: FORM_CREATE,
            payload: res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, FORM_WIPE))
            dispatch({
                type:FORM_WIPE
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

