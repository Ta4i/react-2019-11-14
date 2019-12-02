import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {getUserId} from './middlewares/getUserId'
import {getReviewId} from './middlewares/getReviewId'
import {composeWithDevTools} from 'redux-devtools-extension'
const enhancer = composeWithDevTools(
  applyMiddleware(logging, getUserId, getReviewId)
)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
