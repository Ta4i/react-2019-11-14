import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {dishesReducer} from './dishes'
import {usersReducer} from './users'
import {reviewsReducer} from './reviews'
import {orderReducer} from './order'

export const reducer = combineReducers({
  count: countReducer,
  cart: cartReducer,
  restaurants: restaurantsReducer,
  dishes: dishesReducer,
  users: usersReducer,
  reviews: reviewsReducer,
  order: orderReducer,
})
