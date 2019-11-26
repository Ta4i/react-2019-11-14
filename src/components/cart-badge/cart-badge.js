import React from 'react'
import PropTypes from 'prop-types'
import {Badge} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import Order from '../order'

function CartBadge(props) {
  return (
    <Badge count={props.totalAmount} className={'cart-button-container'}>
      <Order
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
      />
    </Badge>
  )
}

CartBadge.defaultProps = {
  totalAmount: 0,
}

CartBadge.propTypes = {
  totalAmount: PropTypes.number.isRequired,
}

export default connect(state => {
  return {
    totalAmount: Object.values(state.cart).reduce(
      (acc, amount) => acc + amount,
      0
    ),
  }
})(CartBadge)
