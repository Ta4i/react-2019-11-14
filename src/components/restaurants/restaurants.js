import React, {useState} from 'react'
import Restaurant from '../restaurant'
import {Layout, Row, Col, Button} from 'antd'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  return (
    <div className="container">
      <Row type="flex" gutter={16}>
        {props.restaurants.map(restaurant => {
          return (
            <Col key={restaurant.id}>
              <Button
                type="primary"
                block
                size="large"
                onClick={() => setCurrentId(restaurant.id)}
              >
                {restaurant.name}
              </Button>
            </Col>
          )
        })}
      </Row>
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

export default Restaurants
