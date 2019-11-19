import React from 'react'
import {Typography} from 'antd'
import Dishes from '../dishes'
import Reviews from '../reviews'

function Restaurant(props) {
  const {restaurant} = props

  return (
    <div>
      <Typography.Title level={2}>{restaurant.name}</Typography.Title>
      <Dishes menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}

export default Restaurant
