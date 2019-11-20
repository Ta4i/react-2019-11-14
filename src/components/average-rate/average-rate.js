import React from 'react'
import {Rate} from 'antd'

function AverageRating(props) {
  const {reviews, id} = props

  function average({avg, n}, reviews) {
    console.log(reviews.rating)
    return {
      avg: (reviews.rating + n * avg) / (n + 1),
      n: n + 1,
    }
  }

  const defaultVal = {avg: 0, n: 0}
  const rating = reviews.reduce(average, defaultVal).avg

  return (
    <div>
      <Rate key={id} disabled defaultValue={rating} />
    </div>
  )
}

export default AverageRating
