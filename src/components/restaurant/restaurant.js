import React from 'react'
import Dishes from '../dishes'
import Reviews from '../reviews'
import {Rate} from 'antd'

function Restaurant(props) {
  const reviewsSum = props.reviews.reduce(function(sum, review) {
    return sum + parseFloat(review.rating)
  }, 0)

  const average = props.reviews.length ? reviewsSum / props.reviews.length : 0

  return (
    <React.Fragment>
      <div>
        <h2>{props.name}</h2>
        <span>Average Rating: </span>
        <span>
          <Rate allowHalf defaultValue={average} />
        </span>
      </div>
      <div>
        <h2>Dishes</h2>
        <Dishes menu={props.menu} />
      </div>
      <div>
        <h2>Reviews</h2>
        <Reviews reviews={props.reviews} />
      </div>
    </React.Fragment>
  )
}

export default Restaurant
