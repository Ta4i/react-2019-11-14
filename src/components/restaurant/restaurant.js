import React from 'react'
import Dishes from '../dishes'
import Reviews from '../reviews'
import {Rate, Row, Col, Typography} from 'antd'






function Restaurant(props) {
  
const {restaurant} = props 

const restaurantRate = restaurant.reviews.map(a => a.rating).reduce(function(sum, current) {
  return (sum + current) / restaurant.reviews.length;
})

  return (
            <div>
              <Typography.Title level={2} type="warning">
                {restaurant.name}
              </Typography.Title>
                <Rate disabled defaultValue={restaurantRate} />
                <Dishes menu={restaurant.menu} />
                <Reviews reviews={restaurant.reviews}/>
            </div>

            
  )
}

export default Restaurant
