import {normalizedUsers} from '../../fixtures'
import {arrayToMap} from '../utils'
import {FETCH_USERS, ADD_REVIEW} from '../common'

export const usersReducer = (usersState = {}, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (!usersState[action.userId]) {
        return {
          ...usersState,
          [action.userId]: {
            id: action.userId,
            name: action.payload.userName,
          },
        }
      } else {
        return usersState
      }
    }
    case FETCH_USERS: {
      return arrayToMap(action.response)
    }
    default:
      return usersState
  }
}
