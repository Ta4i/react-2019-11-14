import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common'

export const usersReducer = (usersState = normalizedUsers, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...usersState,
        {
          ...action.payload,
        },
      ]
    default:
      return usersState
  }
}
