import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {ReviewPropTypes} from '../reviews/review/review'

function AverageRating({reviews}) {
  const rawRating =
    reviews.reduce((acc, {rating}) => {
      return acc + rating
    }, 0) / reviews.length
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

// AverageRating.defaultProps = {
//   reviews: [],
// }

export const AverageRatingPropTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
}

AverageRating.propTypes = AverageRatingPropTypes

const mapsStateToProps = (state, ownProps) => ({
  reviews: ownProps.reviews.map(reviewsId => state.reviews[reviewsId]),
})

export default connect(mapsStateToProps)(AverageRating)
