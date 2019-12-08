import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {selectReviews, selectUserList} from '../../store/selectors'
import {fetchReviews, fetchUsers} from '../../store/action-creators'

class Reviews extends Component {
  render() {
    const {reviews, id, fetchReviews, fetchUsers, users} = this.props

    // План был вызывать fetch reviews, а заодно и users(они же в reviews нужны) здесь. Но что-то пошло не так...
    if (Object.values(reviews)[0] === undefined || users.length === 0) {
      // fetchUsers()       // Вызов отсюда не сработал
      // fetchReviews()     // Вызов отсюда не сработал
      return <h1>Ждем fetch reviews/users...</h1>
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
    users: selectUserList(state),
  }
}

const mapDispatchToProps = () => {
  return {
    fetchReviews,
    fetchUsers,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
