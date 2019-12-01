import {normalizedUsers} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialState = normalizedUsers.reduce(
  (users, user) => ({
    ...users,
    [user.id]: user,
  }),
  {}
)

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {userId, name} = action.payload
      return {
        ...usersState,
        [userId]: {
          id: userId,
          name,
        },
      }
    }
    default: {
      return usersState
    }
  }
}
