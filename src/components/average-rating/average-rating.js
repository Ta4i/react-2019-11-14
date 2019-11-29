import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

const AverageRating = ({averageRating}) => (
  <div>
    <Rate value={averageRating} disabled allowHalf />
  </div>
)

// AverageRating.defaultProps = {
//   reviews: [],
// }

AverageRating.propTypes = {
  averageRating: PropTypes.number.isRequired,
}

export default connect((state, ownProps) => ({
  averageRating: selectAverageRating(ownProps.reviews)(state),
}))(AverageRating)
