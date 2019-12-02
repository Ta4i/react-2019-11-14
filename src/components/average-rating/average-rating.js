import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'

function AverageRating({reviews, reviewsMap}) {
  debugger
  const rawRating =
    reviews.reduce((acc, reviewId) => {
      return acc + reviewsMap[reviewId].rating
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

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapsStateToProps = (state, ownProps) => ({
  reviewsMap: state.reviews,
})

export default connect(mapsStateToProps)(AverageRating)
