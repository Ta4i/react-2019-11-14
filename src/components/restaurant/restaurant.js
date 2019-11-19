import React from 'react'
import Dishes from '../dishes'
import {Rate} from 'antd'

function Restaurant(props) {
  const {restaurant} = props
  const averageRatingArr =
    Math.round(
      (restaurant.reviews.reduce((sum, current) => sum + current.rating, 0) /
        restaurant.reviews.length) *
        1
    ) / 1

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Dishes menu={restaurant.menu} />
      <h2>Feedback</h2>
      <Rate key={restaurant.id} disabled defaultValue={averageRatingArr} />

      <div>
        {restaurant.reviews.map(reviewer => (
          <div key={reviewer.id}>
            <h2>{reviewer.user}</h2>
            <p>{reviewer.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restaurant
