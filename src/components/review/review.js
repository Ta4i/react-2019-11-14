import React from 'react'
import {List, Comment, Rate, Typography} from 'antd'

function Review(props) {
  const {review} = props

  const rate = <Rate disabled defaultValue={review.rating} />

  const comment = (
    <Comment
      author={review.user}
      content={<Typography.Text>{review.text}</Typography.Text>}
    />
  )

  return <List.Item.Meta title={rate} description={comment} />
}

export default Review
