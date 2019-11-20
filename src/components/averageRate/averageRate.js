import React from 'react'
import {Rate} from 'antd'
import {useRating} from '../../custom-hooks/use-rating'

function AverageRate(props) {
  const {ratings} = props

  const [rating] = useRating(ratings)

  return <Rate disabled allowHalf value={round(rating)} />
}

function round(value) {
  return Math.round(value * 2) % 2 ? Math.floor(value) + 0.5 : Math.round(value)
}

export default AverageRate
