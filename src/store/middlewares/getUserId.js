import {addUser} from '../action-creators'

export const getUserId = store => next => action => {
  if (action.needUserId) {
    const {name} = action.payload
    const user = Object.values(store.getState().users).find(
      user => user.name === name
    )
    let userId = user && user.id

    if (!userId) {
      const uuidv1 = require('uuid/v1')
      userId = uuidv1()
      store.dispatch(addUser({id: userId, name}))
    }

    action.payload = {
      ...action.payload,
      userId,
    }
  }

  next(action)
}
