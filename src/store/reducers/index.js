import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {orderReducer} from './order'
import {orderListReducer} from './orderList'

export const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  order: orderReducer,
  orderList: orderListReducer,
})
