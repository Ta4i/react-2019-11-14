import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import PropTypes from 'prop-types'
import styles from './review.module.css'

function Review({review}) {
  const user = review.user ? review.user : 'MisterX' // Простая проверка входных данных; выдача дефолтных значений
  const text = review.text ? review.text : 'The best cuisine' // --- the same ---
  const rating = review.rating ? review.rating : 4 // --- the same ---
  return (
    <Card className={styles.review}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.name} level={4}>
            {user}
          </Typography.Title>
          <Typography.Text className={styles.comment}>{text}</Typography.Text>
        </Col>
        <Col xs={8} md={6} align="right" className={styles.rateColumn}>
          <Rate disabled value={rating} />
        </Col>
      </Row>
    </Card>
  )
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
}

export default Review
