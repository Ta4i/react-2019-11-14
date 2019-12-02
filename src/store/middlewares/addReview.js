import {selectNewId} from '../selectors'

export const addReview = store => next => action => {
  if (action.type === 'ADD_REVIEW') {
    const newReviewId = selectNewId()
    const userId_inUsers = Object.values(store.getState().users).find(
      user => user.name === action.payload.name
    )
    if (userId_inUsers) {
      store
        .getState()
        .restaurants.find(
          restaurant => restaurant.id === action.payload.idRestaurant
        )
        .reviews.push(newReviewId)

      store.getState().reviews[newReviewId] = {
        id: newReviewId,
        rating: action.payload.rating,
        text: action.payload.text,
        userId: userId_inUsers.id,
      }
    }
  }
  next(action)
}
