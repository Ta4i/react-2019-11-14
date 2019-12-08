import {createSelector} from 'reselect'
import {DOWNLOAD_AT_START} from '../common'

export const selectRestaurants = state => state.restaurants

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectDishesMap = store => store.dishes

export const selectReviewsMap = store => store.reviews

export const selectUsersMap = store => store.users

export const selectUserList = createSelector(
  selectUsersMap,
  usersMap => Object.values(usersMap)
)

export const selectRestaurantId = (_, ownProps) => ownProps.id

export const selectDownloadId = (_, ownProps) => ownProps.downloadUrl

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
  selectRestaurantId,
  (users, id) => {
    return users[id]
  }
)

export const selectRestaurantReviews = createSelector(
  selectReviewsMap,
  selectRestaurants,
  selectRestaurantId,
  (reviews, restaurants, id) => {
    const restaurant = restaurants.find(item => item.id === id)
    const restaurantReviews = []
    if (restaurant) {
      restaurant.reviews.forEach(reviewId => {
        if (reviews[reviewId]) {
          restaurantReviews.push(reviews[reviewId])
        }
      })
    }
    return restaurantReviews
  }
)

export const selectAverageRating = createSelector(
  selectRestaurantReviews,
  reviews => {
    const rawRating =
      reviews.reduce((acc, {rating}) => {
        return acc + rating
      }, 0) / reviews.length
    return Math.floor(rawRating * 2) / 2
  }
)

/**
 * Проверяем загружены ли данные с заданного URL в стор
 */
export const isDownloaded = (state, downloadUrl) => {
  let res = false
  if (state.downloadStatuses[downloadUrl]) {
    res = state.downloadStatuses[downloadUrl] !== DOWNLOAD_AT_START
  }
  console.log("isDownloaded '" + downloadUrl + "': " + res)
  return res
}
