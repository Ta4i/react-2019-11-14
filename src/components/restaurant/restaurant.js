import React from 'react'
import Dishes from '../dishes'

const Restaurant = props => {
  const {restaurant} = props

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Dishes menu={restaurant.menu} />
    </div>
  )
}

export default Restaurant
