import {normalizedDishes} from '../../fixtures'

const initialState = normalizedDishes.reduce((dishes, dish) => {
  return {
    ...dishes,
    [dish.id]: dish,
  }
}, {})

export const dishesReducer = (dishesState = initialState, action) => {
  return dishesState
}
