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
      const {reviewId, userId, text, rating} = action.payload
      return {
        ...reviewsState,
        [reviewId]: {
          id: reviewId,
          text,
          rating,
          userId,
        },
      }
    }
    default: {
      return reviewsState
    }
  }
}
