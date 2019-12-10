import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {
  selectReviews,
  selectReviewsLoaded,
  selectReviewsLoading,
  selectUsersLoaded,
  selectUsersLoading,
} from '../../store/selectors'
import {fetchUsers, fetchReviews} from '../../store/action-creators'
import Loader from '../loader'

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  }

  componentDidMount() {
    const {
      reviewLoaded,
      reviewLoading,
      usersLoaded,
      usersLoading,
      fetchReviews,
      fetchUsers,
    } = this.props

    if (!usersLoaded && !usersLoading) {
      fetchUsers()
    }

    if (!reviewLoaded && !reviewLoading) {
      fetchReviews()
    }
  }

  render() {
    const {reviews, reviewLoading, usersLoading, id} = this.props

    if (usersLoading || reviewLoading) {
      return <Loader />
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
    reviewLoaded: selectReviewsLoaded(state),
    reviewLoading: selectReviewsLoading(state),
    usersLoaded: selectUsersLoaded(state),
    usersLoading: selectUsersLoading(state),
  }
}

const mapDispatchToProps = {
  fetchReviews,
  fetchUsers,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
