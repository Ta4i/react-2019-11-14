import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {generateId} from './middlewares/generateId'
import {composeWithDevTools} from 'redux-devtools-extension'
const enhancer = composeWithDevTools(applyMiddleware(logging, generateId))

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
