import axios from 'axios'

export const FETCHING_SMURF_DATA = 'FETCHING_SMURF_DATA';
export const FETCHING_SMURF_DATA_SUCCESS = 'FETCHING_SMURF_DATA_SUCCESS';
export const FETCHING_SMURF_DATA_FAILURE = 'FETCHING_SMURF_DATA_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';


export const getSmurfs = () => {
    return dispath => {
        dispath({ type : FETCHING_SMURF_DATA })
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispath({ type: FETCHING_SMURF_DATA_SUCCESS, payload: res.data})
        })
        .catch(error => {
            dispath({ type: FETCHING_SMURF_DATA_FAILURE, payload: error.response})
        })
    }
}

export const addSmurfs = (newSmurf) => {
    return dispath => {
        dispath({ type : ADD_SMURF })
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            dispath({ type: ADD_SMURF_SUCCESS, payload: res.data})
        })
        .catch(error => {
            dispath({ type: ADD_SMURF_FAILURE, payload: error.response})
        })
    }
}