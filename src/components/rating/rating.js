import React from 'react'
import {Rate} from 'antd'

// import counterDecorator from '../../decorators/counter'

function Rating(props) {
  const {currentRestaurant} = props

  const reviews = currentRestaurant.reviews
  let averageRating = 0
  for (let review of reviews) {
    averageRating += review.rating
  }
  averageRating = (Math.round(averageRating / reviews.length * 2) / 2)
  
  console.log(averageRating)
  return (
    <div>
      <h3>Рейтинг ресторана: {averageRating}</h3>
      <div>
        <Rate allowHalf value={averageRating} />
      </div>
    </div>

  

  )
}

export default Rating
