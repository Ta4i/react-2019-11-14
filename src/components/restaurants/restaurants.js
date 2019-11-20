import React, {useState} from 'react'
import {Tabs} from 'antd'
import Restaurant from '../restaurant'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  const {TabPane} = Tabs
  function callback(key) {
    console.log(key)
  }
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      {props.restaurants.map(restaurant => {
        return (
          <TabPane tab={restaurant.name} key={restaurant.id}>
            <Restaurant restaurant={restaurant} />
          </TabPane>
        )
      })}
    </Tabs>
  )
}

export default Restaurants
