import axios from 'axios'
import {returnErrors} from './errorAction'
import {
    PROFILE_DATA,
    PROFILE_NEW,
    PROFILE_UPDATE
} from './types'




export const loadUser = ()=>(dispatch, getState)=>{
    dispatch({type:USER_LOADING})

    axios.get('/api/user/loaduser',tokenConfig(getState))
        .then(res=>dispatch({
            type:USER_LOADED,
            payload: res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, AUTH_ERROR))
            dispatch({
                type:AUTH_ERROR
            })
        })
}
