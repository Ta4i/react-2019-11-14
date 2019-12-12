import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {id} = action.payload
      const {generateId} = action

      restaurantsState = [...restaurantsState]
      const restaurant = restaurantsState.find(
        restaurant => restaurant.id === id
      )
      restaurant.reviews.push(generateId)

      return restaurantsState
    }
    default: {
      return restaurantsState
    }
  }
}
