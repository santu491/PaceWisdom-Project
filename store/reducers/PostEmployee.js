import * as actionTypes from '../actionTypes'


const initialState = {
    isLoading: false,
    error: null
}

// Create post employee reducer
const postEmployeeReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.POST_EMPLOYEE_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        case actionTypes.POST_EMPLOYEE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,

            }

        case actionTypes.POST_EMPLOYEE_START:
            return {
                ...state,
                error: null,
                isLoading: true
            }

        default:
            return state
    }

}

export default postEmployeeReducer