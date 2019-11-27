import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review, {ReviewPropTypes} from './review'
import {Col, Row} from 'antd'
import Order from '../order'

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  }
  render() {
    const {reviews} = this.props
    return (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviews.map(review => (
            <Review review={review} key={review.id} />
          ))}
        </Col>
        <Order />
      </Row>
    )
  }
}

export const ReviewsPropTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewPropTypes)),
}

Review.propTypes = ReviewsPropTypes

export default Reviews
