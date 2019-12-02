import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Review = ({review, users}) => {
  console.log(users)
  return (
    <Card className={styles.review}>
      <Row type="flex" align="middle">
        <Col xs={24} md={16} align="left">
          <Typography.Title className={styles.name} level={4}>
            {users[review.userId].name}
          </Typography.Title>
          <Typography.Text className={styles.comment}>
            {review.text}
          </Typography.Text>
        </Col>
        <Col xs={8} md={8} align="right" className={styles.rateColumn}>
          <Rate disabled value={review.rating} />
        </Col>
      </Row>
    </Card>
  )
}
export const ReviewPropTypes = {
  userId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

Review.propTypes = {
  review: PropTypes.shape(ReviewPropTypes),
}

const mapsStateToProps = (state, ownProps) => ({
  review: state.reviews[ownProps.id],
  users: state.users,
})

export default connect(mapsStateToProps)(Review)
