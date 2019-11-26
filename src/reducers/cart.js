import {DISH_ADD, DISH_REMOVE} from '../constants/dishes.js'
import {restaurants} from '../fixtures'

let initItems = {}
restaurants.forEach(item => {
  initItems[item.id] = []
})

const initialState = {
  items: initItems,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISH_ADD:
      return {
        ...state,
        items: {
          ...state.items,
          ...{
            [action.payload.restaurantId]: state.items[
              action.payload.restaurantId
            ].concat(action.payload.dishId),
          },
        },
        count: state.count + 1,
      }
    case DISH_REMOVE:
      const toSlice = state.items[action.payload.restaurantId].filter(
        id => id === action.payload.dishId
      )
      const other = state.items[action.payload.restaurantId].filter(
        id => id !== action.payload.dishId
      )
      const dishes = [...other, ...toSlice.slice(0, toSlice.length - 1)]
      const count = dishes.length
      const newState =
        count >= 0
          ? {
              ...state,
              items: {
                ...state.items,
                ...{
                  [action.payload.restaurantId]: dishes,
                },
              },
            }
          : state
      return newState
    default:
      return state
  }
}
