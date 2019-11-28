import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'

const enhancer = applyMiddleware(logging)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
