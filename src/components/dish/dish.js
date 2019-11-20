import React from 'react'
import {Button, Typography} from 'antd'
import counterDecorator from '../../decorators/counter'

function Dish(props) {
  const {dish, amount, decrease, increase} = props
  return (
    <div>
      <Typography.Title level={3}>{dish.name}</Typography.Title>
      <Typography.Text>Price: {dish.price} $</Typography.Text>
      <div>
        <Button onClick={decrease}>-</Button>
        {amount}
        <Button onClick={increase}>+</Button>
      </div>
    </div>
  )
}

export default counterDecorator(Dish)
