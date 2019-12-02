export const countReducer = (countState = 10, action) => {
  switch (action.type) {
    case 'INCREMENT':
      countState = countState + 1
      break
    case 'DECREMENT':
      countState = countState > 0 ? countState - 1 : 0
      break
  }
  return countState
}
