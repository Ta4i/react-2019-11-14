import React from 'react'
import {Typography} from 'antd'
import Dishes from '../dishes'

function Restaurant(props) {
  const {restaurant} = props

  return (
    <div>
      <Typography.Title level={2}>{restaurant.name}</Typography.Title>
      <Dishes menu={restaurant.menu} />
    </div>
  )
}

export default Restaurant
