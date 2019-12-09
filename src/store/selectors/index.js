import {createSelector} from 'reselect'

export const selectId = (state, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectRestaurants = state => state.restaurants.entities

export const selectRestaurantsLoading = state => state.restaurants.loading

export const selectRestaurantsLoaded = state => state.restaurants.loaded

export const selectDishesMap = state => state.dishes.entities

export const selectDishesLoading = state => state.dishes.loading

export const selectDishesLoaded = state => state.dishes.loaded

export const selectReviewsImmutable = state => state.reviews.get('entities')

export const selectReviewsMap = createSelector(
  selectReviewsImmutable,
  reviewsImmutable => reviewsImmutable.toJS()
)

export const selectReviewsLoading = state => state.reviews.get('loading')

export const selectReviewsLoaded = state => state.reviews.get('loaded')

export const selectUsersMap = state => state.users.entities

export const selectUsersLoading = state => state.users.loading

export const selectUsersLoaded = state => state.users.loaded

export const selectUserList = createSelector(
  selectUsersMap,
  usersMap => Object.values(usersMap)
)

export const selectDishes = createSelector(
  selectDishesMap,
  dishesMap => Object.values(dishesMap.entities)
)

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
    const restaurant = restaurants.find(item => item.id === id)
    console.log(reviews)
    return restaurant && Object.values(reviews).length > 0
      ? restaurant.reviews.map(reviewId => reviews[reviewId])
      : []
  }
)

export const selectAverageRating = createSelector(
  selectReviews,
  reviews => {
    console.log(reviews)
    const rawRating =
      reviews.reduce((acc, {rating}) => {
        return acc + rating
      }, 0) / reviews.length
    return Math.floor(rawRating * 2) / 2
  }
)
