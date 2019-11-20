import React from 'react'
import Review from '../review'

const Reviews = props => {
  const {reviews} = props

  return (
    <>
      <h2>Отзывы</h2>
      <ul>
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  )
}

export default Reviews
