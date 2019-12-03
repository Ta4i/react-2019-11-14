import {
  ADD_REVIEW,
  ADD_TO_CART,
  CREATE_REVIEW,
  CREATE_USER,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from '../common'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export const addToCart = dishId => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: dishId,
    },
  }
}

export const removeFromCart = dishId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: dishId,
    },
  }
}

export const createUser = name => {
  return {
    type: CREATE_USER,
    payload: {
      name: name,
    },
  }
}

export const createReview = (userId, text, rating) => {
  return {
    type: CREATE_REVIEW,
    payload: {
      userId: userId,
      text: text,
      rating: rating,
    },
  }
}

export const addReview = (restaurantId, reviewId) => {
  return {
    type: ADD_REVIEW,
    payload: {
      restaurantId,
      reviewId,
    },
  }
}
