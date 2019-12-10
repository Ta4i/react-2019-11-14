import React from 'react'
import {Route} from 'react-router-dom'
import Restaurants from '../components/restaurants/restaurants'

function RestaurantPage() {
  return (
    <Route
      path="/restaurant/:id"
      render={({match}) => <Restaurants restaurantId={match.params.id} />}
    />
  )
}

export default RestaurantPage
