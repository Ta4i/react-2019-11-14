import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import {openOrder} from '../../store/action-creators'

function CartBadge(props) {
  return (
    <div>
      <Badge count={props.totalAmount} className={'cart-button-container'}>
        <Button
          onClick={() => props.openOrder()}
          icon="shopping-cart"
          size="large"
          type="primary"
          className="cart-button"
        />
      </Badge>
    </div>
  )
}

CartBadge.defaultProps = {
  totalAmount: 0,
}

CartBadge.propTypes = {
  totalAmount: PropTypes.number.isRequired,
}

const mapsStateToProps = state => ({
  totalAmount: Object.values(state.cart).reduce(
    (acc, amount) => acc + amount,
    0
  ),
})

const mapDispatchToProps = {
  openOrder: openOrder,
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(CartBadge)
