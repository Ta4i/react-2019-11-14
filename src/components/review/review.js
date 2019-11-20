import React from 'react'
import {Typography} from 'antd'

function Review(props) {
  const {review} = props

  return (
    <div>
        <Typography.Paragraph>
          Оставил отзыв: <b>{review.user}</b>
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text>Мнение: </Typography.Text>
          <Typography.Text underline strong>{review.text}</Typography.Text>
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text>Поставил оценку: </Typography.Text>
          <Typography.Text underline strong>{review.rating}</Typography.Text>
        </Typography.Paragraph>
    </div>
  )
}

export default Review
