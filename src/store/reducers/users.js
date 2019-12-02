import {normalizedUsers} from '../../fixtures'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const {id, name} = action.payload
      return {
        ...usersState,
        [id]: {id, name},
      }

    default:
      return usersState
  }
}
