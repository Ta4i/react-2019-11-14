import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
// import {logging} from './middlewares/logging'
import {addReview} from './middlewares/addReview'
import {addUser} from './middlewares/addUser'
import {composeWithDevTools} from 'redux-devtools-extension'
const enhancer = composeWithDevTools(applyMiddleware(addUser, addReview))

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
