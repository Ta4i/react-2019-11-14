import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  FETCH_DISHES,
  FETCH_RESTAURANTS,
  INCREMENT,
  REMOVE_FROM_CART,
  API_REVIEWS,
  API_USERS,
  CHANGE_DOWNLOAD_STATUS,
  DOWNLOAD_IN_PROGRESS,
  FETCH_REVIEWS,
  FETCH_USERS,
  DOWNLOAD_FINISH,
} from '../common'
import {isDownloaded} from '../selectors'

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

/**
 * Вызывает загрузку отзывов с сервера, если они еще не загружены
 */
export const fetchReviewsIfNecessary = () => (dispatch, getState) => {
  if (!isDownloaded(getState(), API_REVIEWS)) {
    console.log('Fetch reviews...')
    // меняем статус загрузки отзывов на DOWNLOAD_IN_PROGRESS
    dispatch({
      type: CHANGE_DOWNLOAD_STATUS,
      payload: {
        downloadUrl: API_REVIEWS,
        downloadStatus: DOWNLOAD_IN_PROGRESS,
      },
    })
    // выполняем загрузку
    fetch(API_REVIEWS)
      .then(res => res.json())
      .then(res => {
        // меняем статус загрузки отзывов на DOWNLOAD_FINISH
        dispatch({
          type: CHANGE_DOWNLOAD_STATUS,
          payload: {
            downloadUrl: API_REVIEWS,
            downloadStatus: DOWNLOAD_FINISH,
          },
        })
        // отправляем загруженные данные в стор
        dispatch({
          type: FETCH_REVIEWS,
          response: res,
        })
      })
  }
}

/**
 * Вызывает загрузку пользователей с сервера, если они еще не загружены
 */
export const fetchUsersIfNecessary = () => (dispatch, getState) => {
  if (!isDownloaded(getState(), API_USERS)) {
    console.log('Fetch users...')
    // меняем статус загрузки пользователей на DOWNLOAD_IN_PROGRESS
    dispatch({
      type: CHANGE_DOWNLOAD_STATUS,
      payload: {
        downloadUrl: API_USERS,
        downloadStatus: DOWNLOAD_IN_PROGRESS,
      },
    })
    // выполняем загрузку
    fetch(API_USERS)
      .then(res => res.json())
      .then(res => {
        // меняем статус загрузки пользователей на DOWNLOAD_FINISH
        dispatch({
          type: CHANGE_DOWNLOAD_STATUS,
          payload: {
            downloadUrl: API_USERS,
            downloadStatus: DOWNLOAD_FINISH,
          },
        })
        // отправляем загруженные данные в стор
        dispatch({
          type: FETCH_USERS,
          response: res,
        })
      })
  }
}
