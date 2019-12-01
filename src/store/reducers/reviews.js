import {normalizedReviews} from '../../fixtures'
import {ADD_RESTAURANT_REVIEW} from '../common.js'

const initialState = normalizedReviews.reduce((reviewsMap, review) => {
  return {
    ...reviewsMap,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_RESTAURANT_REVIEW:
      return createReview(reviewsState, action.payload)
    default:
      return reviewsState
  }
}

const createReview = (reviewsState, newReview) => {
  console.log('Add review', newReview)
  return {
    ...reviewsState,
    [newReview.reviewId]: {
      id: newReview.reviewId,
      userId: newReview.userId,
      text: newReview.reviewText,
      rating: newReview.restaurantRating,
    },
  }
}
