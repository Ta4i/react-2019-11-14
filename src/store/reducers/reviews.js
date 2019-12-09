import {arrayToMap} from '../utils'
import {ADD_REVIEW} from '../common'
import {fromJS} from 'immutable'
import {FETCH_REVIEWS} from '../common'

export const reviewsReducer = (reviewsState = fromJS({}), action) => {
  switch (action.type) {
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
    }
    case FETCH_REVIEWS: {
      return fromJS(arrayToMap(action.response))
    }
    default:
      return reviewsState
  }
}
