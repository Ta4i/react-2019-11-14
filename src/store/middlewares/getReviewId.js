export const getReviewId = store => next => action => {
  if (action.needReviewId) {
    const uuidv1 = require('uuid/v1')
    const reviewId = uuidv1()

    action.payload = {
      ...action.payload,
      reviewId,
    }
  }

  next(action)
}
