import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review, {ReviewPropTypes} from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  }
  render() {
    const {reviewsId, id} = this.props
    return (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviewsId.map(reviewId => (
            <Review id={reviewId} key={reviewId} />
          ))}
          <ReviewForm id={id} />
        </Col>
      </Row>
    )
  }
}

export const ReviewsPropTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewPropTypes)),
}

Review.propTypes = ReviewsPropTypes

export default connect(state => {
  return {
    reviewsStore: state.reviews,
  }
})(Reviews)
