import React from 'react'
import Dishes from '../dishes'
import {Rate} from 'antd'

function Restaurant(props) {
  const {restaurant} = props
  function getAverage(arr) {
    return arr.reduce((prev, item) => prev + item.rating, 0) / arr.length
  }
  restaurant.rate = getAverage(restaurant.reviews).toFixed(1)
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>restaurant rate = {restaurant.rate}</p>
      <Dishes menu={restaurant.menu} />
    </div>
  )
}

export default Restaurant
