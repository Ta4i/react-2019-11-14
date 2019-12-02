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

export const addReview = (name, text, rating, restaurantId) => {
  return {
    type: ADD_REVIEW,
    payload: {
      name,
      text,
      rating,
      restaurantId,
    },
  }
}

export const addUser = (name, id) => {
  return {
    type: ADD_USER,
    payload: {
      id,
      name,
    },
  }
}
