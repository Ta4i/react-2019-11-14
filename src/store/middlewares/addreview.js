import {ADD_RESTAURANT_REVIEW} from '../common'
import uuidv4 from 'uuid/v4'

export const addReview = store => next => action => {
  switch (action.type) {
    case ADD_RESTAURANT_REVIEW:
      const existingUser = findUserByName(
        action.payload.userName,
        store.getState().users
      )
      if (existingUser) {
        console.log('Existing user', existingUser)
        action.payload.userId = existingUser.id
        action.payload.isNewUser = false
      } else {
        console.log('New user')
        action.payload.userId = uuidv4()
        action.payload.isNewUser = true
      }
      action.payload.reviewId = uuidv4()
      break
    default:
      break
  }
  next(action)
}

const findUserByName = (userName, allUsersMap) => {
  const users = Object.keys(allUsersMap)
    .filter(userId => allUsersMap[userId].name === userName)
    .map(userId => allUsersMap[userId])
  return users.length > 0 ? users[0] : null
}
