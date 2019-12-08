import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {fromJS, Map} from 'immutable'

export const reviewsReducer = (reviewsState = Map(), action) => {
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
      const reviews = arrayToMap(action.response)
      return reviewsState.merge(reviews)
    }
    default:
      return reviewsState
  }
}
