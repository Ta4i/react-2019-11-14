import {produce} from 'immer'
import {ADD_REVIEW, FETCH_RESTAURANTS} from '../common'

export const restaurantsReducer = (restaurantsState = [], action) =>
  produce(restaurantsState, draft => {
    console.log(action)
    switch (action.type) {
      case ADD_REVIEW: {
        const targetRestaurant = draft.find(
          restaurant => restaurant.id === action.payload.restaurantId
        )
        targetRestaurant.reviews.push(action.generatedId)
        break
      }
      case FETCH_RESTAURANTS: {
        action.response.forEach(item => draft.push(item))
        break
      }
      default:
        return
    }
  })
