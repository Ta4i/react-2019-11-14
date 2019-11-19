import React from 'react'
import {Card, Comment, Rate, Typography} from 'antd'

function Review(props) {
  const {review} = props
  return (
    <Card
      className="card"
      title={<Rate disabled defaultValue={review.rating} />}
    >
      <Comment
        author={review.user}
        content={<Typography.Text>{review.text}</Typography.Text>}
      />
    </Card>
  )
}

export default Review
