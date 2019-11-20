import React from 'react'
import {Button, Typography} from 'antd'
import counterDecorator from '../../decorators/counter'

function Dish(props) {
  const {dish, amount, decrease, increase} = props
  return (
    <div>
      <br />
      <Typography.Title level={4}>
        {dish.name} - ${dish.price}
      </Typography.Title>
      <div>
        <Button
          shape="circle"
          icon="minus"
          type={'primary'}
          onClick={decrease}
        />
        &nbsp;{amount}&nbsp;
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
