import {createSelector} from 'reselect'

export const selectRestaurants = state => state.restaurants

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectId = (_, ownProps) => ownProps.id

export const selectReviewById = createSelector(
  selectReviews,
  selectUsers,
  selectId,
  (reviews, users, id) => {
    let review = reviews[id]
    review.user = users[review.userId]

    return review
  }
)

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
