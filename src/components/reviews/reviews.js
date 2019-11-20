import React from 'react'
import Review from '../review'
import {Typography, List} from 'antd'
import './reviews.css'

function Reviews(props) {
  const {reviews} = props

  return (
    <section className="reviews-section">
      <Typography.Title level={3} className="reviews-section__title">
        Reviews
      </Typography.Title>
      <List
        dataSource={reviews}
        renderItem={review => (
          <List.Item>
            <Review review={review} />
          </List.Item>
        )}
      />
    </section>
  )
}

export default Reviews
