import React from 'react'
import Dishes from '../dishes'
import Comments from '../comment'
import {Rate, Typography} from 'antd'

function Restaurant(props) {
  const {restaurant} = props
  const averageRatingArr =
    Math.round(
      (restaurant.reviews.reduce((sum, current) => sum + current.rating, 0) /
        restaurant.reviews.length) *
        1
    ) / 1

  return (
    <div className="content">
      <Typography.Title level={2}>
        Restaurant {restaurant.name}
      </Typography.Title>
      <Typography.Title level={3}>Menu</Typography.Title>
      <Dishes menu={restaurant.menu} />
      <Typography.Title level={3}>Feedback</Typography.Title>
      <Rate key={restaurant.id} disabled defaultValue={averageRatingArr} />

      <div>
        {restaurant.reviews.map(reviewer => (
          <Comments reviewer={reviewer} />
        ))}
      </div>
    </div>
  )
}

export default Restaurant
