import React, {useCallback, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'

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
  restaurant: {},
}

Restaurants.propTypes = {
  restaurant: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.object,
      image: PropTypes.string,
      menu: PropTypes.array,
      reviews: PropTypes.array,
    })
  ).isRequired,
}

export default Restaurants
