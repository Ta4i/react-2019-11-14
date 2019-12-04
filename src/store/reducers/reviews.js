import {normalizedReviews} from '../../fixtures'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const {id} = action.payload
      return {
        ...reviewsState,
        [id]: {...action.payload},
      }

    default:
      return reviewsState
  }
}
