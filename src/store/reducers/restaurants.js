import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialState = normalizedRestaurants

export const restaurantsReducer = (restaurantsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {reviewId, restaurantId} = action.payload
      return restaurantsState.map(restaurant => {
        if (restaurant.id === restaurantId) {
          return {
            ...restaurant,
            reviews: [...restaurant.reviews, reviewId],
          }
        }
        return restaurant
      })
    }
    default: {
      return restaurantsState
    }
  }
}
