import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {uuid, userId, text, rating} = action.payload
      return {
        ...reviewsState,
        [uuid]: {
          uuid,
          userId,
          text,
          rating,
        },
      }
    }
    default: {
      return reviewsState
    }
  }
}
