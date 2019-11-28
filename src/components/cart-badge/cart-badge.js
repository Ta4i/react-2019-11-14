import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import {showTotal} from '../../store/action-creators'

function CartBadge(props) {
  return (
    <Badge count={props.totalAmount} className={'cart-button-container'}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
        onClick={() => props.showTotalFromDispatch()}
      />
    </Badge>
  )
}

CartBadge.defaultProps = {
  totalAmount: 0,
  showTotal: false,
}

CartBadge.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  showTotal: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
    showTotal: state.showTotal,
    totalAmount: Object.values(state.cart).reduce(
      (acc, amount) => acc + amount,
      0
    ),
  }
}

const mapDispatchToProps = {
  showTotalFromDispatch: showTotal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartBadge)
