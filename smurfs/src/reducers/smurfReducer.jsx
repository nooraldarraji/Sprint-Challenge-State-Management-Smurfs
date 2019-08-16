import { 
    FETCHING_SMURF_DATA,
    FETCHING_SMURF_DATA_SUCCESS,
    FETCHING_SMURF_DATA_FAILURE,
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
    } from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    fetchingSmurf: false,
    error: '',
    addingSmurf: false
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

        // ADD SECTION
        case ADD_SMURF:
            return {
                ...state,
                fetchingSmurfs: false,
                addingSmurf: true,
                error: '',
            }

        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false,
                addingSmurf: false,
                error: '',
            }

        case ADD_SMURF_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                addingSmurf: false,
                error: action.payload,
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
