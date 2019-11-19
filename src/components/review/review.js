import React from 'react'
import {Card, Comment, Rate} from 'antd'

function Review(props) {
  const {review} = props
  return (
    <Card
      style={{marginBottom: '1em'}}
      title={<Rate disabled defaultValue={review.rating} />}
    >
      <Comment author={review.user} content={<p>review.text</p>} />
    </Card>
  )
}

export default Review
