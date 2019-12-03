import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {cartModalReducer} from './cartModal'

export const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  cartModal: cartModalReducer,
})

// reducer template
// const reducer = (state, action) => {
//   return state
// }
