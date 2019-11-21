import React from 'react'
import {Button, Typography, Tag} from 'antd'
import counterDecorator from '../../decorators/counter'

function Dish(props) {
  const {dish, amount, decrease, increase} = props
  return (
      <div style={{marginBottom: 30}}>
        <div style={{display: 'flex', }}>
          <Typography.Title level={3}>{dish.name}</Typography.Title>
        </div>  
        <Tag color="#f50" style={{marginBottom: 20}}>Price: {dish.price} $</Tag>
        <div style={{}}>
          <Button onClick={decrease}>-</Button>
          {amount}
          <Button onClick={increase}>+</Button>
        </div>
      </div>
  )
}

export default counterDecorator(Dish)
