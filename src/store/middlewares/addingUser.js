export const addingUser = store => next => action => {
  if (action.type === 'ADD_USER') {
    const userId = `us${+new Date()}`
    action.payload.id = userId
  }
  next(action)
}
