import { 
    FETCHING_SMURF_DATA,
    FETCHING_SMURF_DATA_SUCCESS,
    FETCHING_SMURF_DATA_FAILURE
    } from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    fetchingSmurf: false,
    error: ''
}

export const smurfReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCHING_SMURF_DATA:
            return {
                ...state,
                isLoading: true,
                fetchingSmurf: false,
                error: ''
            }
        case FETCHING_SMURF_DATA_SUCCESS:
             return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                fetchingSmurf: true,
                error: ''
                
             }
        case FETCHING_SMURF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                fetchingSmurf: false,
                error: action.payload
            } 
        default:
            return state;
    }
}