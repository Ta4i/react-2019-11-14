import React, {Component} from 'react'
import {Tabs} from 'antd'
import {useState, useEffect} from 'react'
import Dishes from '../dishes'
import {restaurants} from '../../fixtures'
import {Typography, Rate} from 'antd'

const {TabPane} = Tabs

function callback(key) {
  console.log(key)
}

function Restaurant(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )

  const rate = props.restaurants[0].reviews.map(id => id.rating)
  const rateDeltaOne = rate.reduce(
    (sum, current) => (sum + current) / rate.length
  )

  const [currentRate, setCurrentRate] = useState(rateDeltaOne)
  const rateDelta = rate.reduce((sum, current) => (sum + current) / rate.length)
  const review = props.restaurants.find(review => review.id)

  const reviews = props.restaurants.map(restaurant => restaurant.reviews)

  //

  console.log(reviews.map(review => review[0]))

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        {props.restaurants.map(restaurant => {
          return (
            <TabPane
              tab={restaurant.name}
              key={restaurant.id}
              onClick={() => setCurrentId(restaurant.id)}
            >
              <Typography.Title level={2} type="warning">
                {restaurant.name}
              </Typography.Title>
              <div>
                <Dishes menu={restaurant.menu} />
              </div>
              <div>
                <Typography.Title level={3} mark>
                  Rate:
                </Typography.Title>
                {reviews.map(item => {
                  return (
                    <div key={item.id}>
                      {item.user}: {item.text}{' '}
                      <Rate disabled defaultValue={currentRate} />
                    </div>
                  )
                })}
              </div>
            </TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}

export default Restaurant
