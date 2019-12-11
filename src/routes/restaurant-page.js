import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Restaurants from '../components/restaurants/restaurants'

function RestaurantPage() {
  return (
    <Switch>
      <Route
        path="/restaurant/:id"
        render={({match}) => <Restaurants restaurantId={match.params.id} />}
      />
      <Route
        path="/restaurant"
        render={() => (
          <Restaurants restaurantId="bb8afbec-2fec-491f-93e9-7f13950dd80b" />
        )}
      />
    </Switch>
  )
}

export default RestaurantPage
