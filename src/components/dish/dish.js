import React from 'react'
import {Button, Typography} from 'antd'
import counterDecorator from '../../decorators/counter'

function Dish(props) {
  const {dish, amount, decrease, increase} = props
  return (
    <div>
      <Typography.Title level={2}>{dish.name}</Typography.Title>
      <Typography.Text>{dish.price}</Typography.Text>
      <div>
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
    </div>
  )
}

export default counterDecorator(Dish)
