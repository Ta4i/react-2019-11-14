import {normalizedRestaurants} from '../../fixtures'
import {ADD_RESTAURANT_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case ADD_RESTAURANT_REVIEW:
      const newReview = action.payload
      const targetRestaurant = Object.assign(
        {},
        restaurantsState.find(
          restaurant => restaurant.id === newReview.restaurantId
        )
      )
      targetRestaurant.reviews = [
        ...targetRestaurant.reviews,
        newReview.reviewId,
      ]
      return [
        ...restaurantsState.filter(
          restaurant => restaurant.id !== newReview.restaurantId
        ),
        targetRestaurant,
      ]
    default:
      return restaurantsState
  }
}
