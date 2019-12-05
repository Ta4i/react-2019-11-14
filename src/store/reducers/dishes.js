import {normalizedDishes} from '../../fixtures'
import {arrayToMap} from '../utils'

export const dishesReducer = (
  dishesState = arrayToMap(normalizedDishes),
  action
) => {
  return dishesState
}
