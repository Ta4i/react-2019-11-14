import {combineReducers} from 'redux'
import {restaurantsReducer} from './restaurants'
import cartReducer from './cart'

export const reducer = combineReducers({
  restaurants: restaurantsReducer,
  cart: cartReducer,
})
