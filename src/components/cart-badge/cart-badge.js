import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import {openModal} from '../../actions/modal'

function CartBadge(props) {
  const {items} = props
  let totalCount = []
  for (const key in items) {
    if (items.hasOwnProperty(key)) {
      const element = items[key]
      totalCount = [...totalCount, ...element]
    }
  }
  return (
    <Badge count={totalCount.length} className={'cart-button-container'}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
        onClick={() => props.open('Ваша корзина')}
      />
    </Badge>
  )
}

CartBadge.defaultProps = {
  items: {},
}

CartBadge.propTypes = {
  items: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  items: state.cart.items,
})

const mapDispatchToProps = {
  open: openModal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartBadge)
