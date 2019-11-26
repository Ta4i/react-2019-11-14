import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {dishesForOrderReducer} from './dishesForOrder'

export const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  dishesForOrder: dishesForOrderReducer,
})
