import {createSelector} from 'reselect'

export const selectRestaurants = state => state.restaurants

export const selectUsers = state => state.users

export const selectReviews = state => state.reviews

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectAverageRating = reviewsIdArray =>
  createSelector(
    selectReviews,
    reviews => {
      const rawRating =
        reviewsIdArray.reduce((acc, id) => {
          return acc + reviews[id].rating
        }, 0) / reviewsIdArray.length
      const normalizedRating = Math.floor(rawRating * 2) / 2
      return normalizedRating
    }
  )

export const selectReviewData = id =>
  createSelector(
    selectReviews,
    selectUsers,
    (reviews, users) => {
      const review = reviews[id]
      return {
        ...review,
        user: users[review.userId].name,
      }
    }
  )

export const selectOrderedDishes = createSelector(
  selectRestaurants,
  selectCart,
  selectDishes,
  (restaurants, cart, dishes) =>
    Object.values(restaurants).reduce(
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
