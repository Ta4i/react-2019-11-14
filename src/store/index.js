import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {composeWithDevTools} from 'redux-devtools-extension'
import {idGenerator} from './middlewares/id-generator'

const enhancer = composeWithDevTools(applyMiddleware(logging, idGenerator))

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
