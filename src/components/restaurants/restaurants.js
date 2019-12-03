import React, {useCallback, useEffect, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {selectRestaurants} from '../../store/selectors'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)

  useEffect(() => {
    props.fetchRestaurants && props.fetchRestaurants()
  }, [props])

  console.log(props.restaurants)

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
  restaurants: selectRestaurants(state),
})

export default connect(mapStateToProps)(Restaurants)
