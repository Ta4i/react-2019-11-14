import React from 'react'
import {Rate} from 'antd'

function Rating(props) {
  const {reviews} = props

  // сорре, что так подробно и в куче переменных, мне по-другому пока сложновато :(
  const ratingsArray = reviews.map(reviewRating => reviewRating.rating)
  const ratingsLength = ratingsArray.length
  const ratingsSum = ratingsArray.reduce((sum, current) => sum + current, 0)
  const ratingAverage = ratingsSum / ratingsLength
  const rating = Math.round(ratingAverage)

  // console.log('array of ratings', ratingsArray)
  // console.log('ratings length', ratingsLength)
  // console.log('ratings sum', ratingsSum)
  // console.log('pure rating', rating)
  // console.log('=> => => ROUND =>', ratingRound)

  return <Rate disabled defaultValue={0} value={rating} />
}

export default Rating
