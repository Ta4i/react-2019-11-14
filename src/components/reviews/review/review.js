import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'
import {selectUser} from '../../../store/selectors'
import {connect} from 'react-redux'
import { LEFT } from '../../../languages/orientation'
import {withLanguageContext} from '../../../decorators/language'

const Review = ({review, user, language: {orientation}}) => (
  <Card className={styles.review}>
    <Row 
      type="flex"
      align="middle"
      justify={orientation === LEFT ? "start" : "end"}
    >
      <Col xs={24} md={16} 
        align={orientation === LEFT ? "left" : "right"}
        order={orientation === LEFT ? 0 : 1}
      >
        <Typography.Title className={styles.name} level={4}>
          {user.name}
        </Typography.Title>
        <Typography.Text className={styles.comment}>
          {review.text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={8} 
        align={orientation === LEFT ? "right" : "left"}
        className={styles.rateColumn}
        order={orientation === LEFT ? 1 : 0}
      >
        <Rate 
          disabled 
          value={review.rating} 
          className={orientation === LEFT ? "": styles.rateRight}
        />
      </Col>
    </Row>
  </Card>
)

export const ReviewPropTypes = {
  userId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

Review.propTypes = {
  review: PropTypes.shape(ReviewPropTypes),
}

const mapStateToProps = (state, ownProps) => ({
  user: selectUser(state, {id: ownProps.review.userId}),
})

export default connect(mapStateToProps)(withLanguageContext(Review))
