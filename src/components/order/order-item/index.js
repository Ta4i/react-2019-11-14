import React from 'react'
import {Row, Col} from 'antd'

function OrderItem(props) {
  const {amount, name, price, totalDishPrice} = props
  return (
    <Row>
      <Col span={6}>{name}</Col>
      <Col span={6}>{price}</Col>
      <Col span={6}>{amount}</Col>
      <Col span={6}>{totalDishPrice}</Col>
    </Row>
  )
}

export default OrderItem
