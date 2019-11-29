import {normalizedRestaurants} from '../../fixtures'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  return restaurantsState
}
