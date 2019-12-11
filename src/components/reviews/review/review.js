import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {selectReviewById} from '../../../store/selectors'

const Review = props => {
  const {
    // id прилетает от родителя, можно не декларировать тут, но оставил для полноты картины
    id,
    review, //фигачим из selector'a selectReviewById
  } = props

  return (
    <Card className={styles.review}>
      <Row type="flex" align="middle">
        <Col xs={24} md={16} align="left">
          <Typography.Title className={styles.name} level={4}>
            {review.user.name}
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

const mapStateToProps = (state, ownProps) => ({
  review: selectReviewById(state, ownProps),
})

export default connect(mapStateToProps)(Review)
