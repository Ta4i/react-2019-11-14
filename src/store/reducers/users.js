import {normalizedUsers} from '../../fixtures'

const initialState = normalizedUsers.reduce((usersMap, user) => {
  return {
    ...usersMap,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  return usersState
}
