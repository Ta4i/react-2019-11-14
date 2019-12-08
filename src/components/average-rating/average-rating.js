import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {useSelector} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

function AverageRating(props) {
  console.log(props)
  const normalizedRating = useSelector(state =>
    selectAverageRating(state, props)
  )

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
