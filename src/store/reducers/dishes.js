import {arrayToMap} from '../utils'
import {FETCH_DISHES} from '../common'

export const dishesReducer = (dishesState = {}, action) => {
  if (action.type === FETCH_DISHES) {
    return arrayToMap(action.response)
  }
  return dishesState
}
