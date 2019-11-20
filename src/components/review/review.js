import React from 'react'
import {Comment, Icon, Avatar} from 'antd'
import {Rate} from 'antd'

function Review(props) {
  const {review} = props
  return (
    <Comment
      author={review.user}
      avatar={
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWe5EGVLn4jgrPREw3Th46Q7HdLyJtYdId2sRQIuXU0kIZduj8xA&s"
          alt={review.user}
        />
      }
      content={
        <p>
          {review.text}
          <br />
          <Rate
            disabled
            character={<Icon type="heart" theme="filled" />}
            value={review.rating}
          />
        </p>
      }
    />
  )
}
export default Review
