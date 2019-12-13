import React from 'react'
import {Route} from 'react-router-dom'
import Restaurants from '../components/restaurants/restaurants'
import {
  selectFirstRestaurant,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../store/selectors'
import {connect, useDispatch} from 'react-redux'
import {Switch, Redirect} from 'react-router-dom'
import {fetchRestaurants} from '../store/action-creators'

function RestaurantPage({
  firstRestaurant,
  restaurantsLoading,
  restaurantsLoaded,
  fetchRestaurants,
}) {
  const dispatch = useDispatch()
  if (firstRestaurant === null || (!restaurantsLoading && !restaurantsLoaded)) {
    dispatch(fetchRestaurants)
    return null
  }

  return (
    <Switch>
      <Route
        path="/restaurant/:id"
        render={({match}) => <Restaurants restaurantId={match.params.id} />}
      />
      <Route>
        <Redirect
          from={'/restaurant'}
          to={`/restaurant/${firstRestaurant.id}`}
        />
      </Route>
    </Switch>
  )
}

const mapDispatchToProps = {
  fetchRestaurants,
}

export default connect(
  state => ({
    firstRestaurant: selectFirstRestaurant(state),
    restaurantsLoading: selectRestaurantsLoading(state),
    restaurantsLoaded: selectRestaurantsLoaded(state),
  }),
  mapDispatchToProps
)(RestaurantPage)
