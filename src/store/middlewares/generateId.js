import {ADD_USER, ADD_REVIEW} from '../common'
import uuid4 from 'uuid/v4'

export const generateId = store => next => action => {
  if (ADD_REVIEW === action.type) {
    const existingUser = store
      .getState()
      .users.find(user => user.name === action.payload.review.name)
    let userId = existingUser && existingUser.id
    if (!existingUser) {
      userId = uuid4()

      store.dispatch({
        type: ADD_USER,
        payload: {
          name: action.payload.review.name,
          id: userId,
        },
      })
    }
    // я не уверен, можно ли здесь mutate обьект?

    return next({
      ...action,
      payload: {
        id: uuid4(),
        rating: action.payload.review.rating,
        text: action.payload.review.text,
        userId: userId,
      },
    })
  }
  next(action)
}
