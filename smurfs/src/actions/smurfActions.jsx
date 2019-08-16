import axios from 'axios'

export const FETCHING_SMURF_DATA = 'FETCHING_SMURF_DATA';
export const FETCHING_SMURF_DATA_SUCCESS = 'FETCHING_SMURF_DATA_SUCCESS';
export const FETCHING_SMURF_DATA_FAILURE = 'FETCHING_SMURF_DATA_FAILURE';

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