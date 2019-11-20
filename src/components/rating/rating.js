import React from 'react'
import {Rate} from 'antd'

function Rating(props) {
  const {reviews} = props

  // сорре, что так подробно и в куче переменных, мне по-другому сложновато не запутаться :(
  const ratingsArray = reviews.map(reviewRating => reviewRating.rating)
  const ratingsLength = ratingsArray.length
  const ratingsSum = ratingsArray.reduce((sum, current) => sum + current, 0)
  const ratingAverage = ratingsSum / ratingsLength
  const rating = Math.round(ratingAverage)

  return <Rate disabled defaultValue={0} value={rating} />
}

export default Rating
