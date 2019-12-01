import {normalizedUsers} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const getInitialState = () =>
  normalizedUsers.reduce(
    (users, user) => ({
      ...users,
      [user.id]: user,
    }),
    {}
  )

const initialState = getInitialState()

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return getInitialState()
    }
    default: {
      return usersState
    }
  }
}
