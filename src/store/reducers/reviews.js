import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const getInitialState = () =>
  normalizedReviews.reduce((reviews, review) => {
    return {
      ...reviews,
      [review.id]: review,
    }
  }, {})

const initialState = getInitialState()

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return getInitialState()
    }
    default: {
      return reviewsState
    }
  }
}
