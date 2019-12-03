import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import {openCart} from '../../store/action-creators'

function CartBadge(props) {
  const {openCart} = props

  return (
    <Badge count={props.totalAmount} className={'cart-button-container'}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
        onClick={() => openCart()}
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

const mapDispatchToProps = {
  openCart: openCart,
}

export default connect(
  state => {
    return {
      totalAmount: Object.values(state.cart).reduce(
        (acc, amount) => acc + amount,
        0
      ),
    }
  },
  mapDispatchToProps
)(CartBadge)
