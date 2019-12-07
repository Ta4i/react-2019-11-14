import {LOAD_DATA} from '../common'

export const loaderReducer = (loaderState = {}, action) => {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        ...loaderState,
        [action.dataName]: true,
      }
    }
    default:
      return loaderState
  }
}
