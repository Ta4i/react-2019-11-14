import React, {useState} from 'react'
import Restaurant from '../restaurant'
import Dishes from '../dishes'
import { Divider } from 'antd'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  return (
    <div style={{textAlign: 'center'}}>
      <ul>
        {props.restaurants.map(restaurant => {
          return (
            <li key={restaurant.id} style={{listStyle:'none', display:'inline', padding:'20px'}}>
              <button onClick={() => setCurrentId(restaurant.id)}>
                {restaurant.name}
              </button>
            </li>
          )
        })}
      </ul>
        <Divider orientation="center" style={{display: 'inline-block', backgroundColor: '#555555', minWidth: '0px', width: '50%'}} />
      <Restaurant currentRestaurant={restaurant} />
        <Divider orientation="center" style={{display: 'inline-block', backgroundColor: '#555555', minWidth: '0px', width: '50%'}} />
      <Dishes menu={restaurant.menu} />
    </div>
    
  )
}

export default Restaurants
