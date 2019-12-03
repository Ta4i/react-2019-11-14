import {CREATE_REVIEW, CREATE_USER} from '../common'

const uuidv1 = require('uuid/v1')

const lastIdMap = {}

export const idGenerator = store => next => action => {
  for (let key in action.payload) {
    if (action.payload[key].toString().startsWith('LAST_ID')) {
      action.payload[key] = lastIdMap[action.payload[key]]
    }
  }

  if (action.type === CREATE_USER || action.type === CREATE_REVIEW) {
    let id = uuidv1()
    action.payload['id'] = id
    lastIdMap['LAST_ID_' + action.type] = id
  }

  next(action)
}
