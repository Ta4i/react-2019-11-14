export const countReducer = (countState = 10, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return countState + 1
    }
    case 'DECREMENT': {
      return countState - 1
    }
  }
  return countState
}
