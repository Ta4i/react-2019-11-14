import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  if (action.type === ADD_REVIEW) {
    const {restaurantId, reviewId} = action.payload

    for (let rest of restaurantsState) {
      if (rest.id === restaurantId) {
        rest.reviews.push(reviewId)
        break
      }
    }

    return restaurantsState.slice(0)
  }
  return restaurantsState
}
