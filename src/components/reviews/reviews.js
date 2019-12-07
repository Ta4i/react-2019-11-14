import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {selectReviews, selectLoadedData} from '../../store/selectors'
import {fetchReviews} from '../../store/action-creators'

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  }

  componentDidMount() {
    if (!this.props.loadedData.reviews) {
      this.props.fetchReviews()
    }
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.loadedData.reviews
  }

  render() {
    console.log('---render reviews')
    const {reviews, id} = this.props
    if (reviews.length === 0) {
      return <h1>Loading reviews...</h1>
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
    loadedData: selectLoadedData(state),
  }
}

const mapDispatchToProps = {
  fetchReviews,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
