import {createSelector} from 'reselect'

export const selectRestaurants = state => state.restaurants

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectId = (_, ownProps) => ownProps.id // '_' -> ф-ия ожидает state, который пропускаем

export const selectAvarageRating = createSelector(
  selectRestaurants,
  selectReviews,
  selectId,
  (restaurants, reviews, id) => {
    const restaurant = restaurants.find(restaurant => restaurant.id === id)
    const ratings = []

    restaurant.reviews.forEach(reviewId => {
      const {rating} = reviews[reviewId]
      ratings.push(rating)
    })

    const rawRating =
      ratings.reduce((acc, rating) => {
        return acc + rating
      }, 0) / ratings.length

    const normalizedRating = Math.floor(rawRating * 2) / 2

    return normalizedRating
  }
)

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
