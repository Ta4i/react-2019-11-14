import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {composeWithDevTools} from 'redux-devtools-extension'
import {addingReview} from './middlewares/addingReview'
import {addingUser} from './middlewares/addingUser'
const enhancer = composeWithDevTools(
  applyMiddleware(logging, addingReview, addingUser)
)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
