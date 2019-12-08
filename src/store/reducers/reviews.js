import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {fromJS} from 'immutable'

export const reviewsReducer = (reviewsState = fromJS({}), action) => {
  switch (action.type) {
    case FETCH_REVIEWS: {
      return fromJS(arrayToMap(action.response))
    }
    case ADD_REVIEW: {
      return reviewsState.set(
        action.generatedId,
        fromJS({
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        })
      )
      // return {
      //   ...reviewsState,
      //   [action.generatedId]: {
      //     id: action.generatedId,
      //     userId: action.userId,
      //     text: action.payload.text,
      //     rating: action.payload.rating,
      //   },
      // }
    }
    default:
      return reviewsState
  }
}
