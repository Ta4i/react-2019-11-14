import React from 'react'
import {PageHeader, Descriptions, Typography} from 'antd'
import Dishes from '../dishes'
import Reviews from '../reviews'
import AverageRate from '../averageRate'
import './restaurant.css'

function Restaurant(props) {
  const {restaurant} = props

  return (
    <div>
      <PageHeader
        className="restaurant-header"
        ghost="false"
        title={<Typography.Title level={1}>{restaurant.name}</Typography.Title>}
        subTitle={
          <AverageRate
            ratings={restaurant.reviews.map(review => review.rating)}
          />
        }
      />
      <Dishes menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}

export default Restaurant
