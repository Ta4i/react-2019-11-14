import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {dishesReducer} from './dishes'
import {usersReducer} from './users'
import {reviewsReducer} from './reviews'

import {connectRouter} from 'connected-react-router'
import {history} from '../history'

export const reducer = combineReducers({
  router: connectRouter(history),
  count: countReducer,
  cart: cartReducer,
  restaurants: restaurantsReducer,
  dishes: dishesReducer,
  users: usersReducer,
  reviews: reviewsReducer,
})
