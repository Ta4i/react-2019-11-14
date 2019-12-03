import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'

function AverageRating({ratings}) {
  const rawRating =
    ratings.reduce((acc, rating) => {
      return acc + rating
    }, 0) / ratings.length
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.defaultProps = {
  reviews: [],
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state, ownState) => {
  const ratings = ownState.reviews.map(
    reviewId => state.reviews[reviewId].rating
  )
  return {
    ratings,
  }
}

export default connect(mapStateToProps)(AverageRating)
