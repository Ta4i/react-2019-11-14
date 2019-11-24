import React, {useCallback, useEffect, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import PropTypes from 'prop-types'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)

  useEffect(() => {
    props.fetchRestaurants && props.fetchRestaurants()
  }, [props])

  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])
  return (
    <div data-automation-id="RESTAURANTS">
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

Restaurants.defaultProps = {
  restaurants: [],
}

Restaurants.propTypes = {
  restaurants: PropTypes.array,
  fetchRestaurants: PropTypes.func,
}

export default Restaurants
