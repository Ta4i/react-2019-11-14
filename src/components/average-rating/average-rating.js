import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {selectReviews} from '../../store/selectors'
import connect from 'react-redux/es/connect/connect'

function AverageRating({reviewIds, reviews}) {
  const rawRating =
    reviewIds
      .map(id => reviews[id])
      .reduce((acc, {rating}) => {
        return acc + rating
      }, 0) / reviewIds.length
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

const mapStateToProps = state => ({
  reviews: selectReviews(state),
})

// AverageRating.defaultProps = {
//   reviews: [],
// }

AverageRating.propTypes = {
  reviewIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  // reviews: ???
}

export default connect(mapStateToProps)(AverageRating)
