import React from 'react'
import {Typography, Rate } from 'antd'

function Review(props) {
  const {review} = props
  return (
    <div style={{marginRight: 50,}}>
        <div>
            <Typography.Title level={3}>{review.user}:</Typography.Title>
            <Typography.Text>{review.text}</Typography.Text>
        </div>
        <div>
            <Rate disabled defaultValue={review.rating} />
        </div>
    </div>
  )
}

export default Review