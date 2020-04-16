
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import postEmployeeReducer from './reducers/PostEmployee'
import getEmployeeReducer from './reducers/GetEmployee'

const rootReducer=combineReducers({
    getEmployee:getEmployeeReducer,
    postEmployee:postEmployeeReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store