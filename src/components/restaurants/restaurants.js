import React, {useState} from 'react'
import Dishes from '../dishes'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  return (
    <div>
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
      <h2>{restaurant.name}</h2>
      <Dishes menu={restaurant.menu} />
    </div>
  )
}

export default Restaurants
