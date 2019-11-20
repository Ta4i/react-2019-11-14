import React, {useState} from 'react'
import Restaurant from '../restaurant'
import {Typography} from 'antd'
import restaurant from './restaurant.css'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  return (
    <div className="holder">
      <div className="leftMenu">
        <Typography.Text className="title">Select restaurant</Typography.Text>

        <ul>
          {props.restaurants.map(restaurant => {
            return (
              <li key={restaurant.id}>
                <button onClick={() => setCurrentId(restaurant.id)}>
                  {restaurant.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

export default Restaurants
