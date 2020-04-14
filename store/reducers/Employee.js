import * as actionTypes from '../actionTypes'

const initialState = {
    employeeData:[]
}

 const employeeReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_EMPLOYEE:
            return{
                ...state,
                employeeData:[...state.employeeData,{id:state.employeeData.length+1,...action.employeeData}]
            }

            case actionTypes.DELETE_EMPLOYEE:
                return{
                    ...state,
                    employeeData:state.employeeData.filter((employee)=>employee.id !== action.employeeId)
                }
        default:
            return state
    }

}

export default employeeReducer