import {DECREMENT, INCREMENT} from '../common'

export const countReducer = (countState = 10, action) => {
  switch (action.type) {
    case INCREMENT: {
      return countState + 1
    }
    case DECREMENT: {
      return countState <= 0 ? 0 : countState - 1
    }
    default: {
      return countState
    }
  }
}
