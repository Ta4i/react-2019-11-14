import uuid from 'uuid/v4'

export const generateId = state => next => action => {
  console.log('generateId', action)

  if (action.generateId) {
    action.generateId = uuid()
  }

  next(action)
}
