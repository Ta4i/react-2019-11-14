import {normalizedUsers} from '../../fixtures'
import {CREATE_USER} from '../common'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  if (action.type === CREATE_USER) {
    const {id, name} = action.payload

    return {
      ...usersState,
      [id]: {
        id,
        name,
      },
    }
  }
  return usersState
}
