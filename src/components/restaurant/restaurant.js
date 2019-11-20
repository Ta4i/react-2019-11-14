import React from 'react'
import {Rate, Card} from 'antd'
import Dishes from '../dishes'

function Restaurant(props) {
  const {data} = props
  var ratingAvg = computeRatingAvg(data.reviews)
  return (
    <div>
      <h2>{data.name}</h2>
      <Rate value={ratingAvg} disabled />
      <Dishes menu={data.menu} />
      {data.reviews.map(review => (
        <div key={review.id}>
          <Card
            title={review.user}
            size="small"
            style={{width: 500, margin: 10}}
          >
            <p>{review.text}</p>
          </Card>
        </div>
      ))}
    </div>
  )
}

function computeRatingAvg(reviews) {
  var ratings = reviews.filter(r => !isNaN(r.rating)).map(r => r.rating)
  var ratingSum = ratings.reduce((a, b) => a + b, 0)
  return ratings.length > 0 ? ratingSum / ratings.length : 0
}

export default Restaurant
