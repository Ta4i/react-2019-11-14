import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import User from '../../user'

const Review = ({review}) => (
  <Card className={styles.review}>
    <Row type="flex" align="middle">
      <Col xs={24} md={16} align="left">
        <Typography.Title className={styles.name} level={4}>
          <User id={review.userId} />
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

export const ReviewPropTypes = {
  id: PropTypes.string,
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
}

Review.propTypes = ReviewPropTypes

const mapsStateToProps = (state, ownProps) => ({
  review: state.reviews[ownProps.id],
})

export default connect(mapsStateToProps)(Review)
