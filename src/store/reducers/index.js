import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'

export const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
})
