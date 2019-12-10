import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {useSelector} from 'react-redux'
import {selectAverageRating, selectReviewsLoaded} from '../../store/selectors'

function AverageRating(props) {
  const reviewsLoaded = useSelector(selectReviewsLoaded)

  const normalizedRating = useSelector(state =>
    selectAverageRating(state, props)
  )

  if (!reviewsLoaded) {
    return null
  }

  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  id: PropTypes.string.isRequired,
}

export default AverageRating
