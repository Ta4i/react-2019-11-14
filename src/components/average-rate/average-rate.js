import React from 'react'
import {Rate} from 'antd'
import averageSum from '../utils/averageSum'

function AverageRating(props) {
  const {reviews, id} = props

  return (
    <div>
      <Rate key={id} disabled defaultValue={averageSum(reviews)} />
    </div>
  )
}

export default AverageRating
