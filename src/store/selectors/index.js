import {createSelector} from 'reselect'

export const selectRestaurants = state => state.restaurants

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectDishesMap = store => store.dishes

export const selectReviewsMap = store => store.reviews.toJS()

export const selectUsersMap = store => store.users.toJS()

export const selectUserList = createSelector(
  selectUsersMap,
  usersMap => Object.values(usersMap)
)

export const selectId = (_, ownProps) => ownProps.id

export const selectOrderedDishes = createSelector(
  selectRestaurants,
  selectCart,
  selectDishesMap,
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

export const selectUser = createSelector(
  selectUsersMap,
  selectId,
  (users, id) => {
    return users[id]
  }
)

export const selectReviews = createSelector(
  selectReviewsMap,
  selectRestaurants,
  selectId,
  (reviews, restaurants, id) => {
    if (Object.values(reviews).length === 0) {
      return []
    }
    const restaurant = restaurants.find(item => item.id === id)
    return restaurant
      ? restaurant.reviews.map(reviewId => reviews[reviewId])
      : []
  }
)

export const selectAverageRating = createSelector(
  selectReviews,
  reviews => {
    if (Object.values(reviews).includes(undefined)) {
      return 0
    }
    const rawRating =
      reviews.reduce((acc, {rating}) => {
        return acc + rating
      }, 0) / reviews.length
    return Math.floor(rawRating * 2) / 2
  }
)
