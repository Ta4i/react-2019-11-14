import {ADD_REVIEW} from '../common'
import uuid from 'uuid/v4'
import {addUser} from '../action-creators'

export const generateUser = state => next => action => {
  console.log('generateUser', action)
  let newUser = true //default

  if (action.type === ADD_REVIEW) {
    const users = Object.values(state.getState().users)

    let userName = action.payload.user

    users.forEach(user => {
      if (user.name === userName) {
        newUser = false
        action.payload.user = user.id
      }
    })

    if (newUser) {
      const newUserId = uuid()
      state.dispatch(addUser(newUserId, userName))
      action.payload.user = newUserId
    }
  }

  next(action)
}
