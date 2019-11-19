import React from 'react'
import {Button, Typography, Col} from 'antd'
import counterDecorator from '../../decorators/counter'

function Dish(props) {
  const {dish, amount, decrease, increase} = props
  return (
    <Col>
      <Typography.Title level={2}>{dish.name}</Typography.Title>
      <Typography.Text>{dish.price}$</Typography.Text>
      <div>
        <Button
          shape="circle"
          icon="minus"
          type={'primary'}
          size={'small'}
          onClick={decrease}
        />
        {amount}
        <Button
          shape="circle"
          icon="plus"
          type={'primary'}
          size={'small'}
          onClick={increase}
        />
      </div>
    </Col>
  )
}

export default counterDecorator(Dish)
