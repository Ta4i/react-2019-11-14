import React from 'react'
import Restaurant from '../restaurant'

function Restaurants(props) {
  const {restaurants} = props
  return (
    <div>
      {restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}

export default Restaurants
