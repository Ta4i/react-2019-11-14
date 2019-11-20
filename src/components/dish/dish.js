import React from 'react'
import {Button, Divider, Typography} from 'antd'
import counterDecorator from '../../decorators/counter'

function Dish(props) {
  const {dish, amount, decrease, increase} = props
  return (
    <div>
      <Typography.Title level={3}>{dish.name}</Typography.Title>
      <Typography.Title level={4}>Price{dish.price}$</Typography.Title>
      <Typography.Text>{dish.ingredients.toString()}</Typography.Text>
      <div style={{padding: '10px 0 0'}}>
        <Button
          shape="circle"
          icon="minus"
          type={'primary'}
          onClick={decrease}
        />
        {amount}
        <Button
          shape="circle"
          icon="plus"
          type={'primary'}
          onClick={increase}
        />
      </div>
      <Divider />
    </div>
  )
}

export default counterDecorator(Dish)
