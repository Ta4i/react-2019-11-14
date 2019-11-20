import React, {useState} from 'react'
import Restaurant from '../restaurant'
import {Button, Typography} from 'antd'
import './restaurants.css'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)

  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )

  return (
    <div className="restaurants">
      <Typography.Title level={3} className="restaurants__heading">
        Choose restaurant
      </Typography.Title>
      <ul className="restaurants__list">
        {props.restaurants.map(restaurant => {
          return (
            <li key={restaurant.id} className="restaurants__list-item">
              <Button onClick={() => setCurrentId(restaurant.id)}>
                {restaurant.name}
              </Button>
            </li>
          )
        })}
      </ul>

      <Restaurant restaurant={restaurant} />
    </div>
  )
}

export default Restaurants
