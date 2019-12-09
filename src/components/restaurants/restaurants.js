import React, {useCallback, useEffect, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {
  selectRestaurants,
  selectUsersMap,
  selectReviewsMap,
} from '../../store/selectors'
import {
  fetchRestaurants,
  fetchUsers,
  fetchReviews,
} from '../../store/action-creators'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(
    props.restaurants.length ? props.restaurants[0].id : ''
  )

  useEffect(() => {
    if (currentId === '' && props.restaurants.length > 0) {
      setCurrentId(props.restaurants[0].id)
    }
  }, [props.restaurants, currentId])

  useEffect(() => {
    props.fetchRestaurants && props.fetchRestaurants()
    props.fetchUsers && props.fetchUsers()
    props.fetchReviews && props.fetchReviews()
  }, [props.fetchRestaurants, props.fetchUsers, props.fetchReviews])

  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])

  if (
    props.restaurants.length === 0 ||
    Object.values(props.users).length === 0 ||
    Object.values(props.reviews).length === 0
  ) {
    return <h1>Loading...</h1>
  }

  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )

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
  users: selectUsersMap(state),
  reviews: selectReviewsMap(state),
})

const mapDispatchToProps = {
  fetchRestaurants,
  fetchUsers,
  fetchReviews,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurants)
