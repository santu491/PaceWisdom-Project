import * as actionTypes from '../actionTypes'


const initialState = {
    employeeData: [],
    isLoading: false,
    error: null
}

// Create getEmployee Redaucer
const getEmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EMPLOYEE_START:
            return {
                ...state,
                error: null,
                isLoading: true
            }

        case actionTypes.GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                employeeData:action.employeeData
            }

        case actionTypes.GET_EMPLOYEE_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        case actionTypes.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employeeData: state.employeeData.filter((employee) => employee.id !== action.employeeId)
            }
        default:
            return state
    }

}

export default getEmployeeReducer