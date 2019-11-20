import React from 'react'
import Dishes from '../dishes'
import {Rate} from 'antd'
import Reviews from '../reviews'

const Restaurant = props => {
  const {restaurant} = props

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Rate disabled defaultValue={0} value={restaurant.averageRating} />
      <Dishes menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}

export default Restaurant
