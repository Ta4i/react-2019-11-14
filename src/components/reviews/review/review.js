import React, {useEffect} from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'
import {selectUser} from '../../../store/selectors'
import {connect} from 'react-redux'
import {fetchUsersIfNecessary} from '../../../store/action-creators'

const Review = props => {
  const {review, user} = props

  useEffect(() => {
    props.fetchUsersIfNecessary()
  })

  return (
    <Card className={styles.review}>
      <Row type="flex" align="middle">
        <Col xs={24} md={16} align="left">
          <Typography.Title className={styles.name} level={4}>
            {user ? user.name : 'Loading users...'}
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
  user: selectUser(state, {id: ownProps.review.userId}),
})

const mapDispatchToProps = {
  fetchUsersIfNecessary,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review)
