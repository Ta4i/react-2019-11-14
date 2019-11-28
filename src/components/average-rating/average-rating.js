import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {string} from 'postcss-selector-parser'

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
  reviews: PropTypes.arrayOf(string).isRequired,
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
