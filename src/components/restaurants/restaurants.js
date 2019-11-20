import React, {useState} from 'react'
import Dishes from '../dishes'
import Restaurant from '../restaurant'
import Comments from '../comments'

import {Rate} from 'antd'

import classes from './restaurants.module.css'

function Restaurants(props) {
  const {restaurants} = props
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  let value = 0

  const restaurant = restaurants.find(restaurant => restaurant.id === currentId)

  const handlerClick = id => {
    setCurrentId(id)
  }

  const createListRestaurant = () =>
    restaurants.map(restaurant => (
      <Restaurant
        key={restaurant.id}
        onClick={() => handlerClick(restaurant.id)}
        name={restaurant.name}
      />
    ))

  const countMiddleRate = () => {
    let countMiddle = 0
    let restaurantRate = restaurant.reviews

    restaurantRate.forEach(rate => {
      countMiddle += rate.rating
    })

    value = Math.round(countMiddle / restaurantRate.length)
  }

  countMiddleRate()

  return (
    <div className={classes.Restaurants}>
      <div>
        <div className={classes.Restaurants__groupBtn}>
          {createListRestaurant()}
        </div>
        <div className={classes.Restaurants__headLine}>
          <h1>{restaurant.name}</h1>
          <div className={classes.Restaurants__rate}>
            <Rate value={value} />
          </div>
        </div>
        <Dishes menu={restaurant.menu} />
        <Comments comments={restaurant.reviews} />
      </div>
    </div>
  )
}

export default Restaurants
