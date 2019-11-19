import React from 'react'
import Review from '../review'
import {Typography} from 'antd'

function Reviews(props) {
  const {reviews} = props
  return (
    <section className="descriptionSection">
      <Typography.Title level={3} className="descriptionSection__title">
        Reviews
      </Typography.Title>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  )
}

export default Reviews
