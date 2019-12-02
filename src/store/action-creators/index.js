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

export const addReview = data => ({
  type: ADD_REVIEW,
  payload: data,
  needUserId: true,
  needReviewId: true,
})

export const addUser = ({id, name}) => ({
  type: ADD_USER,
  payload: {
    id,
    name,
  },
})
