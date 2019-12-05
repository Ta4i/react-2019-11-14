import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const reviewsReducer = (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return [
        ...reviewsState,
        {
          ...action.payload,
        },
      ]
    default:
      return reviewsState
  }
}
