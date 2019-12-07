import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {selectReviews, selectReviewsIsLoaded} from '../../store/selectors'
import {fetchReviews} from '../../store/action-creators'

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  }
  render() {
    const {fetchReviews, reviewsIsLoaded, reviews, id} = this.props
    if (fetchReviews && !reviewsIsLoaded) {
      fetchReviews()
      return <h1>Loading</h1>
    }
    return (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviews.map(review => (
            <Review review={review} key={review.id} />
          ))}
          <ReviewForm id={id} />
        </Col>
      </Row>
    )
  }
}

export const ReviewsPropTypes = {
  id: PropTypes.string,
}

Review.propTypes = ReviewsPropTypes

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: selectReviews(state, ownProps),
    reviewsIsLoaded: selectReviewsIsLoaded(state, ownProps),
  }
}

export default connect(
  mapStateToProps,
  {fetchReviews}
)(Reviews)
