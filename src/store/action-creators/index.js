import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  FETCH_DISHES,
  FETCH_RESTAURANTS,
  INCREMENT,
  REMOVE_FROM_CART,
  FETCH_REVIEWS,
  FETCH_USERS,
  LOAD_DATA,
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

export const loadedData = dataName => ({
  type: LOAD_DATA,
  dataName,
})

export const fetchUsers = () => dispatch => {
  fetch('/api/users')
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_USERS,
        response: res,
      })
      dispatch(loadedData('users'))
    })
}

export const fetchReviews = () => (dispatch, getState) => {
  if (!getState().loadedData.users) {
    dispatch(fetchUsers())
  }
  fetch('/api/reviews')
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_REVIEWS,
        response: res,
      })
      dispatch(loadedData('reviews'))
    })
}

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
