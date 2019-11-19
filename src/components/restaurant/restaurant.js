import React from 'react'
import {Button, Typography} from 'antd'
// import counterDecorator from '../../decorators/counter'

function Restaurant(props) {
  const {currentRestaurant} = props

  return (
    <div>
      <h2>{currentRestaurant.name}</h2>

    </div>
  )
}

export default Restaurant
