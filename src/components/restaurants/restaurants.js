import React, {useState} from 'react'
import Dishes from '../dishes'
import Restaurant from '../restaurant'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  return (
    <div style={{position: 'relative'}}>
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
      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '20px',
          border: '1px solid grey',
          width: '400px',
          height: '600px',
          borderRadius: '20px',
          clear: 'both',
        }}
      >
        <Restaurant name={restaurant.name} reviews={restaurant.reviews} />
      </div>
    </div>
  )
}

export default Restaurants
