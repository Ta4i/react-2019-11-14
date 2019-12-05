import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  ADD_REVIEW,
  ADD_USER,
} from '../common'

export const increment = () => {
  return {
    type: INCREMENT,
    payload: {},
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: {},
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

export const addReview = (restaurantId, userId, text, rating) => {
  return {
    type: ADD_REVIEW,
    payload: {
      restaurantId: restaurantId,
      userId: userId,
      text: text,
      rating: rating,
    },
  }
}

export const addUser = name => {
  return {
    type: ADD_USER,
    payload: {
      name: name,
    },
  }
}
