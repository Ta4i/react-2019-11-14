import {normalizedUsers} from '../../fixtures'
import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_USERS} from '../common'

export const usersReducer = (
  // usersState = arrayToMap(normalizedUsers),
  usersState = {},
  action
) => {
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
      break
    }
    case FETCH_USERS: {
      const mapUsers = arrayToMap(action.response)
      return {
        ...usersState,
        ...mapUsers,
      }
    }
    default:
      return usersState
  }
}
