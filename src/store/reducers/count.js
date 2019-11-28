export const countReducer = (countState = 10, action) => {
  if (countState === 0) {
    return countState
  }
  return action.type === 'INCREMENT'
    ? countState + 1
    : action.type === 'DECREMENT'
    ? countState - 1
    : countState
}
