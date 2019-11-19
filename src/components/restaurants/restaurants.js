import React, {useState} from 'react'
import Restaurant from '../restaurant'
import {Layout, Row, Col, Button} from 'antd'

const {Header, Footer, Sider, Content} = Layout

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
              <Button
                type="primary"
                block
                size="large"
                onClick={() => setCurrentId(restaurant.id)}
              >
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
