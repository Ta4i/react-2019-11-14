import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {generateId} from './middlewares/generate-Id'
import {generateUser} from './middlewares/generate-user'
import {logging} from './middlewares/logging'
import {composeWithDevTools} from 'redux-devtools-extension'
const enhancer = composeWithDevTools(applyMiddleware(generateId, generateUser))

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
