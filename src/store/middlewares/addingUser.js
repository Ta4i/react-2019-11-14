export const addingUser = store => next => action => {
  console.log('---', action.payload.needUserId)
  if (action.payload.needUserId) {
    const userId = `us${+new Date()}`
    action.payload.id = userId
  }
  next(action)
}
