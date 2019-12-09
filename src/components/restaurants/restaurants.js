import React, {useCallback, useEffect, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {
  selectRestaurants,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../../store/selectors'
import {fetchRestaurants} from '../../store/action-creators'
import Loader from '../loader'

function Restaurants({
  restaurants,
  restaurantsLoading,
  restaurantsLoaded,
  fetchRestaurants,
}) {
  const [currentId, setCurrentId] = useState(
    restaurants.length ? restaurants[0].id : ''
  )

  useEffect(() => {
    if (currentId === '' && restaurants.length > 0) {
      setCurrentId(restaurants[0].id)
    }
  }, [restaurants, currentId])

  useEffect(() => {
    !restaurantsLoading && !restaurantsLoaded && fetchRestaurants()
  }, [fetchRestaurants, restaurantsLoading, restaurantsLoaded])

  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])

  if (restaurantsLoading) {
    return <Loader />
  }

  const restaurant = restaurants.find(restaurant => restaurant.id === currentId)

  return (
    <div data-automation-id="RESTAURANTS">
      <RestaurantsNavigation
        restaurants={restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state),
  restaurantsLoading: selectRestaurantsLoading(state),
  restaurantsLoaded: selectRestaurantsLoaded(state),
})

const mapDispatchToProps = {
  fetchRestaurants,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurants)
