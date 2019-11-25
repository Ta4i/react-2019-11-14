import {combineReducers} from 'redux'
import {countReducer} from './count'

export const reducer = combineReducers({
  count: countReducer,
})
