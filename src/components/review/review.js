import React from 'react'
import {Rate} from 'antd'

const Review = props => {
  const {review} = props

  return (
    <li>
      <h3>{review.user}</h3>
      <Rate disabled defaultValue={0} value={review.rating} />
      <p>{review.text}</p>
    </li>
  )
}

export default Review
