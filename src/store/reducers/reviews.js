import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'
import {addUser} from '../action-creators'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {text, rating, user} = action.payload
      const {generateId} = action

      // диспатчю имя, в мидле проверяю есть ли юзер с таким именем, если ок - возвращаю вместо имени айди, если нет - генерю нового

      return {
        ...reviewsState,
        [generateId]: {
          id: generateId,
          rating: rating,
          text: text,
          userId: user,
        },
      }
    }
    default: {
      return reviewsState
    }
  }
}
