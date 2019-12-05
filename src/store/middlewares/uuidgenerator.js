import uuid from 'react-native-uuid'
import {ADD_REVIEW} from '../common'
export const uuidGenerator = store => next => action => {
  action.payload.uuid = uuid.v1()
  next(action)
}
