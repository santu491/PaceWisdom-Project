
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import employeeReducer from './reducers/Employee'

const store=createStore(employeeReducer,applyMiddleware(thunk))

export default store