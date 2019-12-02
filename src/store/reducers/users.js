import {normalizedUsers} from '../../fixtures'
import {ADD_RESTAURANT_REVIEW} from '../common'

const initialState = normalizedUsers.reduce((usersMap, user) => {
  return {
    ...usersMap,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_RESTAURANT_REVIEW:
      if (action.payload.isNewUser) {
        return createUser(usersState, action.payload)
      } else {
        return usersState
      }
    default:
      return usersState
  }
}

const createUser = (usersState, {userId, userName}) => {
  const newUser = {
    id: userId,
    name: userName,
  }
  console.log('createUser', newUser)
  return {
    ...usersState,
    [newUser.id]: newUser,
  }
}
