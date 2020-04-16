
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import postEmployeeReducer from './reducers/PostEmployee'
import getEmployeeReducer from './reducers/GetEmployee'

// Combined all the reducers
const rootReducer=combineReducers({
    getEmployee:getEmployeeReducer,
    postEmployee:postEmployeeReducer
})

// Create store
const store=createStore(rootReducer,applyMiddleware(thunk))

export default store