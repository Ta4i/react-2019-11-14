import {ADD_REVIEW, FETCH_REVIEWS} from '../common'

/**
 * Управление состоянием о всех отзывах ресторанов
 * Данные с отзывами загружаются с сервера
 */
export const reviewsReducer = (reviewsState = [], action) => {
  switch (action.type) {
    case ADD_REVIEW: {
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
      // добавляем пришедшие с сервера отзывы в стор
      return action.response.reduce(
        (acc, item) => {
          acc[item.id] = item
          return acc
        },
        {...reviewsState}
      )
    }
    default: {
      return reviewsState
    }
  }
}
