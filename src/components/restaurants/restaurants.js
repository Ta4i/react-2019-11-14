import React, {useCallback, useEffect, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'

function Restaurants(props) {
  const restaurantsMenu = props.restaurants.map(restaurant => restaurant.menu)
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

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  selectedDishes: state.cart,
})

export default connect(mapStateToProps)(Restaurants)
