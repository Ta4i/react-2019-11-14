import React from 'react'
import Review from '../review'

function Reviews(props) {
  const {currentReviews} = props
  const reviews = currentReviews.map(review => (
      <Review key={review.id} review={review} />
    )
  )

  return (
    <div>
      <h3>
        Отзывы посетителей:
      </h3>
      {reviews}
    </div>
  )
}

export default Reviews
