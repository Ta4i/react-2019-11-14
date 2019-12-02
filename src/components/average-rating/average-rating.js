import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

function AverageRating(props) {
  const {averageReview} = props
  return (
    <div>
      <Rate value={averageReview} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviewsId: PropTypes.arrayOf(PropTypes.string).isRequired,
  averageReview: PropTypes.number.isRequired,
}

const mapsStateToProps = (state, ownProps) => ({
  averageReview: selectAverageRating(state, ownProps),
})

export default connect(mapsStateToProps)(AverageRating)
