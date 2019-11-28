import {createSelector} from 'reselect'

export const selectRestaurants = state => state.restaurants

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectOrderedDishes = createSelector(
  selectRestaurants,
  selectCart,
  selectDishes,
  (restaurants, cart, dishes) =>
    restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const amount = cart[dishId]
          const dish = dishes[dishId]
          if (amount) {
            const totalDishPrice = amount * dish.price
            result.totalPrice += totalDishPrice
            result.dishes.push({
              dish,
              amount,
              totalDishPrice,
            })
          }
        })
        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )
)
