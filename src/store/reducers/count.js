export const countReducer = (countState = 0, action) => {
  // return action.type === 'INCREMENT' ? countState + 1 : countState

  switch (action.type) {
    case 'INCREMENT': {
      return countState + 1
    }

    case 'DECREMENT': {
      return countState - 1
    }

    default: {
      return countState
    }
  }
}
