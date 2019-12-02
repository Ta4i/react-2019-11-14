import {selectNewId} from '../selectors'

export const addUser = store => next => action => {
  if (action.type === 'ADD_REVIEW') {
    // Будет отработан до middleware addReview
    const users = store.getState().users
    if (!Object.values(users).find(user => user.name === action.payload.name)) {
      const newUserId = selectNewId()
      store.getState().users[newUserId] = {
        id: newUserId,
        name: action.payload.name,
      }
    }
  }
  next(action)
}
