import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  FETCH_DISHES,
  FETCH_RESTAURANTS,
  INCREMENT,
  REMOVE_FROM_CART,
  FETCH_USERS,
  FETCH_REVIEWS,
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

export const addReview = (userName, rating, text, restaurantId) => ({
  type: ADD_REVIEW,
  payload: {
    userName,
    rating,
    text,
    restaurantId,
  },
  generateId: true,
  provideUserId: true,
})

export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS,
  callAPI: '/api/restaurants',
})

export const fetchDishes = () => (dispatch, getState) => {
  fetch('/api/dishes')
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_DISHES,
        response: res,
      })
    )
}

export const fetchUsers = () => ({
  type: FETCH_USERS,
  callAPI: '/api/users',
})

export const fetchReviews = () => (dispatch, getState) => {
  fetch('/api/reviews')
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_REVIEWS,
        response: res,
      })
    )
}
