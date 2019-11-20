import React from 'react'
import {Typography} from 'antd'
import './review.css'

function Review(props) {
  const {review} = props

  return (
    <div className="review__item">
      <Typography.Title level={4} className="review__item-heading">
        User: {review.user}
      </Typography.Title>
      <div className="review__item-description">Description: {review.text}</div>
      <div className="review__item-rating">Rating: {review.rating}</div>
    </div>
  )
}

export default Review
