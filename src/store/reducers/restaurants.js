import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      restaurantsState
        .find(restaurant => restaurant.id === action.payload.restaurantId)
        .reviews.push(action.payload.uuid)
      return restaurantsState.slice(0)
    }
    default: {
      return restaurantsState
    }
  }
}
