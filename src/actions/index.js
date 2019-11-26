import {DISH_ADD, DISH_REMOVE} from '../constants/dishes'

export const addToCart = (dishId, restaurantId) => {
  return {
    type: DISH_ADD,
    payload: {
      restaurantId,
      dishId,
    },
  }
}

export const removeFromCart = (dishId, restaurantId) => {
  return {
    type: DISH_REMOVE,
    payload: {
      restaurantId,
      dishId,
    },
  }
}
