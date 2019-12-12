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
      const {id, name} = action.payload
      return {
        ...usersState,
        [id]: {
          id: id,
          name: name,
        },
      }
    }
    default:
      return usersState
  }
}
