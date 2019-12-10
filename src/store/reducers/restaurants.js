import {produce} from 'immer'
import {ADD_REVIEW, FAIL, FETCH_RESTAURANTS, START, SUCCESS} from '../common'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: [],
}

export const restaurantsReducer = (restaurantsState = initialState, action) =>
  produce(restaurantsState, draft => {
    switch (action.type) {
      case ADD_REVIEW: {
        const targetRestaurant = draft.entities.find(
          restaurant => restaurant.id === action.payload.restaurantId
        )
        targetRestaurant.reviews.push(action.generatedId)
        break
      }
      case FETCH_RESTAURANTS + START: {
        draft.loading = true
        break
      }
      case FETCH_RESTAURANTS + SUCCESS: {
        draft.loading = false
        draft.loaded = true
        draft.error = null
        draft.entities = action.response
        break
      }
      case FETCH_RESTAURANTS + FAIL: {
        draft.loading = false
        draft.loaded = false
        draft.error = action.error
        break
      }
      default:
        return
    }
  })
