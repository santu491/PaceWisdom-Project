import * as actionTypes from './actionTypes'
export const addEmployee=(data)=>{
    return{
        type:actionTypes.ADD_EMPLOYEE,
        employeeData:data
    }
}

export const deleteEmployee=(id)=>{
    return{
        type:actionTypes.DELETE_EMPLOYEE,
        employeeId:id
    }
}