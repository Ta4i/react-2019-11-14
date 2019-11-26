import React, {useCallback, useEffect, useState} from 'react'
import Restaurant from '../restaurant'
import PropTypes from 'prop-types'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'

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
Restaurants.propTypes = {
  restaurants: PropTypes.array,
  fetchRestaurants: PropTypes.func,
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
})

export default connect(mapStateToProps)(Restaurants)
