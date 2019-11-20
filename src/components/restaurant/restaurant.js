import React from 'react'
import Dishes from '../dishes'
import {Rate} from 'antd'

function Restaurant(props) {
  const {restaurant} = props
  function getAverageRate(arr) {
    return arr.reduce((prev, item) => prev + item.rating, 0) / arr.length
  }
  restaurant.rate = getAverageRate(restaurant.reviews).toFixed(0)
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Rate count="5" value={restaurant.rate} />
      <Dishes menu={restaurant.menu} />
    </div>
  )
}

export default Restaurant
