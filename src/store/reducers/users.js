import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_USERS} from '../common'
import {fromJS} from 'immutable'

export const usersReducer = (usersState = fromJS(arrayToMap([])), action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (!usersState[action.userId]) {
        return usersState.set(
          action.userId,
          fromJS({
            id: action.userId,
            name: action.payload.userName,
          })
        )
      } else {
        return usersState
      }
    }
    case FETCH_USERS: {
      return fromJS(arrayToMap(action.response))
    }
    default:
      return usersState
  }
}
