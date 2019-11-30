import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review, {ReviewPropTypes} from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import connect from 'react-redux/es/connect/connect'
import {selectReviews} from '../../store/selectors'

class Reviews extends Component {
  static defaultProps = {
    reviewIds: [],
  }
  render() {
    const {reviewIds, restaurantId} = this.props
    return (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviewIds.map(reviewId => (
            <Review id={reviewId} key={reviewId} />
          ))}
          <ReviewForm id={restaurantId} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  reviews: selectReviews(state),
})

export const ReviewsPropTypes = {
  reviewIds: PropTypes.arrayOf(PropTypes.string),
  // reviews: ???
}

export default connect(mapStateToProps)(Reviews)
