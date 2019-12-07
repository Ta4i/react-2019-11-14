import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'

export const reviewsReducer = (reviewsState = arrayToMap([]), action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      console.log('ADD_RIVEW reviewsState')
      return {
        ...reviewsState,
        [action.generatedId]: {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        },
      }
    }
    case FETCH_REVIEWS: {
      console.log('FETCH_REVIEWS reviewsState')
      return arrayToMap(action.response)
    }
    default:
      console.log('DEFAULT reviewsState')
      return reviewsState
  }
}
