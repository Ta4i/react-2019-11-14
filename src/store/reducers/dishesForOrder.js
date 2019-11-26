import {restaurants} from '../../fixtures'

export const dishesForOrderReducer = (dishesState, action) =>
  dishesState ||
  restaurants.reduce(
    (obj, restaurant) => ({
      ...restaurant.menu.reduce(projection(restaurant), obj, restaurant),
    }),
    {}
  )

const projection = restaurant => (obj, e) => {
  const {id, name, price} = e
  return {
    ...obj,
    [id]: {
      name,
      price,
      restaurant: restaurant.name,
    },
  }
}
