export const countReducer = (countState = 10, action) => {
  console.log('🛰', action)
  return action.type === 'INCREMENT' ? countState + 1 : countState
}
