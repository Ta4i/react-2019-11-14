import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'

export const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
})
