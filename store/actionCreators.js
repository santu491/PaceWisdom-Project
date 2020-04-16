import{Alert} from 'react-native'
import * as actionTypes from './actionTypes'
import axios from 'axios'

const URL='https://pacewisdom-d9d3e.firebaseio.com/employees.json'
const postEmployeeStart = () => {
    return {
        type: actionTypes.POST_EMPLOYEE_START
    }
}

const postEmployeeSuccess = () => {
    return {
        type: actionTypes.POST_EMPLOYEE_SUCCESS,
    }
}

const postEmployeeFail = (error) => {
    return {
        type: actionTypes.POST_EMPLOYEE_FAIL,
        error: error
    }
}

export const addEmployee = (data) => {
    return (dispatch) => {
        dispatch(postEmployeeStart())
        axios.post(URL, data).then(response => {
            Alert.alert("Data is submitted")
            dispatch(postEmployeeSuccess())
            dispatch(getEmployee())
        })
            .catch(error => {
                dispatch(postEmployeeFail(error))
            })
    }
}


const getEmployeeStart = () => {
    return {
        type: actionTypes.GET_EMPLOYEE_START,
        
    }
}

const getEmployeeSuccess = (data) => {
    return {
        type: actionTypes.GET_EMPLOYEE_SUCCESS,
        employeeData:data
        
    }
}

const getEmployeeFail = (error) => {
    return {
        type: actionTypes.GET_EMPLOYEE_FAIL,
        error: error
    }
}

export const getEmployee = () => {
    return (dispatch) => {
        dispatch(getEmployeeStart())
        axios.get(URL).then(response => {

            let fetchData=[]
            for(let key in response.data){
                fetchData.push({
                    id:key,
                    ...response.data[key]
                })
            }
            dispatch(getEmployeeSuccess(fetchData))
        })
            .catch(error => {
                dispatch(getEmployeeFail(error))
            })
    }
}


const deleteEmployeeStart = () => {
    return {
        type: actionTypes.DELETE_EMPLOYEE_START,
    }
}

const deleteEmployeeSuccess = (id) => {
    return {
        type: actionTypes.DELETE_EMPLOYEE_SUCCESS,
        employeeId: id
    }
}

const deleteEmployeefail = (error) => {
    return {
        type: actionTypes.DELETE_EMPLOYEE_FAIL,
        error: error
    }
}

export const deleteEmployee = (id) => {
    return (dispatch) => {
        dispatch(deleteEmployeeStart())
        dispatch(deleteEmployeeSuccess(id))
            // axios.delete('https://pacewisdom-d9d3e.firebaseio.com/employees.json', id).then(response => {
            //     dispatch(deleteEmployeeSuccess(id))
            //     dispatch(getEmployee())
            // })
            //     .catch(error => {
            //         dispatch(deleteEmployeefail(error))
            //     })
        }   
}