import {ADD_REVIEW} from '../common'
import {
  normalizedReviews,
  normalizedUsers,
  normalizedRestaurants,
} from '../../fixtures'

export const addReview = store => next => action => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {restaurantId, name, text, rating} = action.payload
      const uuidv1 = require('uuid/v1')

      const user = normalizedUsers.find(user => user.name === name) //TODO
      const userId = user ? user.id : uuidv1()
      normalizedUsers.push({
        id: userId,
        name,
      })

      const reviewId = uuidv1()
      normalizedReviews.push({
        id: reviewId,
        userId,
        text,
        rating,
      })

      normalizedRestaurants
        .find(restaurant => restaurant.id === restaurantId)
        .reviews.push(reviewId)

      break
    }
    default: {
    }
  }
  next(action)
}
