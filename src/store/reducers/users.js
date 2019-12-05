import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const name = action.payload.name
      const id = action.payload.uuid
      return {
        ...usersState,
        [id]: {
          id,
          name,
        },
      }
    }
    default: {
      return usersState
    }
  }
}
