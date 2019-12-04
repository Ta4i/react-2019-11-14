import {normalizedRestaurants} from '../../fixtures'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const {id, restaurantId} = action.payload
      return restaurantsState.map(restaurant => {
        if (restaurant.id === restaurantId) {
          let copyRestaurant = Object.assign({}, restaurant)
          copyRestaurant.reviews = [...restaurant.reviews, id]
          return copyRestaurant
          // Как-то монструозненько
        }
        return restaurant
      })

    default:
      return restaurantsState
  }
}
