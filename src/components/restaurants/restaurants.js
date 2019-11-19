import React, {useState} from 'react'
import Restaurant from '../restaurant'
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
      {/* <h1>{restaurant.name}</h1> */}
      <Restaurant currentRestaurant={restaurant} />
      <Dishes menu={restaurant.menu} />
    </div>
  )
}

export default Restaurants
