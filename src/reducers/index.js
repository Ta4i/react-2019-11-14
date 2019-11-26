import {combineReducers} from 'redux'
import {restaurantsReducer} from './restaurants'
import cartReducer from './cart'
import modalreducer from './modal'

export const reducer = combineReducers({
  restaurants: restaurantsReducer,
  cart: cartReducer,
  modal: modalreducer,
})
