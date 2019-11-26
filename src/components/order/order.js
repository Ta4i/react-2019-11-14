import React from 'react'
import PropTypes from 'prop-types'
import {Card, Typography} from 'antd'
import styles from './order.module.css'
import {connect} from 'react-redux'

function Order(props) {
  return (
    <div className={styles.order}>
      <Typography.Title level={2}>Order</Typography.Title>
      <Card>
        <div>Total dishes amount: {props.totalAmount}</div>
      </Card>
    </div>
  )
}

Order.defaultProps = {
  totalAmount: 0,
}

Order.propTypes = {
  totalAmount: PropTypes.number.isRequired,
}

export default connect(state => {
  return {
    totalAmount: Object.values(state.cart).reduce(
      (acc, amount) => acc + amount,
      0
    ),
  }
})(Order)
