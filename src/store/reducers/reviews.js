import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {fromJS} from 'immutable'

export const reviewsReducer = (
  reviewsState = fromJS(arrayToMap([])),
  action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      console.log('ADD_RIVEW reviewsState')
      return reviewsState.set(
        action.generatedId,
        fromJS({
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        })
      )
      // return {
      //   ...reviewsState,
      //   [action.generatedId]: {
      //     id: action.generatedId,
      //     userId: action.userId,
      //     text: action.payload.text,
      //     rating: action.payload.rating,
      //   },
      // }
    }
    case FETCH_REVIEWS: {
      console.log('FETCH_REVIEWS reviewsState')
      return fromJS(arrayToMap(action.response))
    }
    default:
      console.log('DEFAULT reviewsState')
      return reviewsState
  }
}
