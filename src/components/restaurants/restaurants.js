import React, {useState} from 'react'
import Restaurant from '../restaurant'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  console.log('restaurant', restaurant)

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
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

export default Restaurants
