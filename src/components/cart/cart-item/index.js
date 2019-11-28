import React from 'react'
import {Button, Col, Row, Typography} from 'antd'
import {addToCart, removeFromCart} from '../../../store/action-creators'
import styles from './cart-item.module.css'
import {connect} from 'react-redux'

function CartItem({dish, amount, increment, decrement}) {
  return (
    <Row type="flex" align="middle" className={styles.cartItem}>
      <Col span={12} align="left">
        <Typography.Text>{dish.name}</Typography.Text>
      </Col>
      <Col span={12} align="right">
        <Typography.Text>{dish.price * amount} $</Typography.Text>
        <div className={styles.counter}>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon="minus"
            onClick={() => decrement(dish.id)}
          />
          <Typography.Text className={styles.count}>{amount}</Typography.Text>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon="plus"
            onClick={() => increment(dish.id)}
          />
        </div>
      </Col>
    </Row>
  )
}

export default connect(
  null,
  {
    increment: addToCart,
    decrement: removeFromCart,
  }
)(CartItem)
