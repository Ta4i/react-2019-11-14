import {createSelector} from 'reselect'

export const selectRestaurants = state => state.restaurants

export const selectCart = state => state.cart

export const selectOrderedDishes = createSelector(
  selectRestaurants,
  selectCart,
  (restaurants, cart) =>
    restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dish => {
          const amount = cart[dish.id]
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
