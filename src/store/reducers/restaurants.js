import {normalizedRestaurants} from '../../fixtures'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const {id, restaurantId} = action.payload
      return restaurantsState.map(restaurant => {
        restaurant.id === restaurantId && restaurant.reviews.push(id)
        return restaurant
      })

    default:
      return restaurantsState
  }
}
