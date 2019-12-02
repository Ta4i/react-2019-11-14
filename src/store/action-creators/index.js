import {
  ADD_RESTAURANT_REVIEW,
  ADD_TO_CART,
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

export const newRestaurantReview = (
  restaurantId,
  userName,
  reviewText,
  restaurantRating
) => {
  return {
    type: ADD_RESTAURANT_REVIEW,
    payload: {
      restaurantId: restaurantId,
      reviewId: null,
      userId: null,
      userName: userName,
      reviewText: reviewText,
      restaurantRating: restaurantRating,
    },
  }
}
