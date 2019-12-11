import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import {selectCart} from '../../store/selectors'
import { Link } from 'react-router-dom'

function CartBadge(props) {
  return (
    <Badge count={props.totalAmount} className={'cart-button-container'}>
      <Link to={'/order'}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
        disabled={!props.totalAmount}
      />
      </Link>
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
    totalAmount: Object.values(selectCart(state)).reduce(
      (acc, amount) => acc + amount,
      0
    ),
  }
})(CartBadge)
