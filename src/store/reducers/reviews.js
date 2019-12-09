import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {produce} from 'immer'
// import {fromJS} from 'immutable'

export const reviewsReducer = produce((draft = {}, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      draft[action.generatedId] = {
        id: action.generatedId,
        userId: action.userId,
        text: action.payload.text,
        rating: action.payload.rating,
      }
      break
    }
    case FETCH_REVIEWS: {
      draft = arrayToMap(action.response)
      break
    }
    default:
      return draft
  }
  return draft
})
