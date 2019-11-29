import {Col, Row, Typography} from 'antd'
import React from 'react'

import styles from './cart-row.module.css'

function CartRow({align = 'top', leftContent, rightContent}) {
  return (
    <Row type="flex" align={align} className={styles.cartRow}>
      <Col span={12} align="left">
        <Typography.Text>{leftContent}</Typography.Text>
      </Col>
      <Col span={12} align="right">
        <Typography.Text>{rightContent}</Typography.Text>
      </Col>
    </Row>
  )
}

export default CartRow
