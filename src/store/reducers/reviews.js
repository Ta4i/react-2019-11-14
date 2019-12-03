import {normalizedReviews} from '../../fixtures'
import {CREATE_REVIEW} from '../common'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  if (action.type === CREATE_REVIEW) {
    const {id, userId, text, rating} = action.payload
    return {
      ...reviewsState,
      [id]: {
        id,
        userId,
        text,
        rating,
      },
    }
  }
  return reviewsState
}
