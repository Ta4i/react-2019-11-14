import React from 'react'
import {Button, Typography, Col, Row} from 'antd'
import counterDecorator from '../../decorators/counter'

import {Card} from 'antd'

function Dish(props) {
  const {dish, amount, decrease, increase} = props

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  }

  return (
    <Card
      title={dish.name}
      extra={dish.price + '$'}
      className="dish"
      bodyStyle={style}
    >
      <div className="counter">
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
    </Card>
  )
}

export default counterDecorator(Dish)
