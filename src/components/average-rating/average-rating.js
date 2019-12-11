import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {selectAvarageRating} from '../../store/selectors'

function AverageRating(props) {
  const {id, normalizedRating} = props
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  id: PropTypes.string.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  normalizedRating: selectAvarageRating(state, ownProps),
})

export default connect(mapStateToProps)(AverageRating)
