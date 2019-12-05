import {produce} from 'immer'
import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) =>
  produce(restaurantsState, draft => {
    if (action.type === ADD_REVIEW) {
      const targetRestaurant = draft.find(
        restaurant => restaurant.id === action.payload.restaurantId
      )
      targetRestaurant.reviews.push(action.generatedId)
    }
  })
