import React from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'

function AverageRating(props) {
  const {reviewsId, reviews} = props

  // Перенос данной калькуляции в селектор не взлетел, была проблема с передачей ownProps
  // Хотелось бы увидеть решение или в ДЗ или в комментариях
  const totalRating = reviewsId.reduce((totalRating, review) => {
    return (totalRating = totalRating + reviews[review].rating)
  }, 0)

  const rawRating = totalRating / reviewsId.length
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviewsId: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.object.isRequired,
}

const mapsStateToProps = state => ({
  reviews: state.reviews,
})

export default connect(mapsStateToProps)(AverageRating)
