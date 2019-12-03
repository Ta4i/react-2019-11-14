import React, {Component} from 'react'
import {Typography, Card, Row} from 'antd'

import styles from '../cart.module.css'

class CartItem extends Component {
  render() {
    const {
      cartItem: {name, price, qty},
    } = this.props

    return (
      <Card title={name} className={styles.cartItem} headStyle={{fontSize: 21}}>
        <Row type="flex" justify="space-between">
          <Typography.Text className={styles.cartItemPrice}>
            {price}$
          </Typography.Text>
          <Typography.Text className={styles.cartItemQty}>
            {qty}
          </Typography.Text>
        </Row>
      </Card>
    )
  }
}

export default CartItem
