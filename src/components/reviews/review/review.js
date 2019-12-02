import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectReviewData} from '../../../store/selectors'

const Review = ({review}) => (
  <Card className={styles.review}>
    <Row type="flex" align="middle">
      <Col xs={24} md={16} align="left">
        <Typography.Title className={styles.name} level={4}>
          {review.user}
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

export const UserPropTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
}

export const ReviewPropTypes = {
  id: PropTypes.string,
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
}

Review.propTypes = ReviewPropTypes

export default connect((state, ownProps) => ({
  review: selectReviewData(ownProps.id)(state),
}))(Review)
