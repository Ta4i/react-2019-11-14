import React from 'react'
import PropTypes from 'prop-types'
import {Card, Typography} from 'antd'
import styles from './order.module.css'
import {connect} from 'react-redux'

function Order(props) {
  const {selectedDishes, totalAmount} = props

  return (
    <div className={styles.order}>
      <Typography.Title level={2}>Order</Typography.Title>
      <Card>
        <div>Selected dishes: {selectedDishes}</div>
        <div>Total dishes amount: {totalAmount}</div>
      </Card>
    </div>
  )
}

Order.defaultProps = {
  selectedDishes: 'No selected dishes',
  totalAmount: 0,
}

Order.propTypes = {
  selectedDishes: PropTypes.string.isRequired,
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
