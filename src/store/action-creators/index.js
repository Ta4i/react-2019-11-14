import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  FETCH_DISHES,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  FETCH_USERS,
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

export const fetchUsers = () => ({
  type: FETCH_USERS,
  callAPI: '/api/users',
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

export const fetchReviews = () => (dispatch, getState) => {
  // thunk ...
  fetch('/api/reviews')
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_REVIEWS,
        response: res,
      })
    )
}
