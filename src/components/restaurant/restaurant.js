import React from 'react'
import {Typography, Rate} from 'antd'
import Dishes from '../dishes'
import Reviews from '../reviews'
import {useRating} from '../../custom-hooks/use-rating'

function Restaurant(props) {
  const {restaurant} = props
  const [rating] = useRating(restaurant.reviews.map(review => review.rating))

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gridGap: '1em',
          alignItems: 'center',
        }}
      >
        <Typography.Title level={1} style={{margin: '0'}}>
          {restaurant.name}
        </Typography.Title>
        <Rate disabled allowHalf value={round(rating)} />
      </div>
      {/* <img alt={restaurant.name} src={restaurant.image} /> */}
      <Dishes menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}

function round(value) {
  let result = Math.floor(value)
  const fract = value - result
  result += fract < 0.25 ? 0 : fract < 0.75 ? 0.5 : 1
  return result
}

export default Restaurant
