import { combineReducers } from 'redux'
import todoReducer from './todoReduce'

const rootReduce = combineReducers({
    todo : todoReducer,
})

export default rootReduce;