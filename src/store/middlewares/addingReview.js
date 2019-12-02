import {addUser} from '../action-creators'

export const addingReview = store => next => action => {
  switch (action.type) {
    case 'ADD_REVIEW': {
      action.payload.id = `re${+new Date()}`
      const {name} = action.payload

      let user = foundUser(name, store)
      if (!user) {
        store.dispatch(addUser(name))
        user = foundUser(name, store)
      }
      action.payload.userId = user.id
      break
    }

    default:
  }
  next(action)
}

const foundUser = (userName, store) =>
  Object.values(store.getState().users).find(user => user.name === userName)
