import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import Order from '../order'
import {Modal} from 'antd'

class CartBadge extends Component {
  state = {
    orderVisible: false,
  }

  showOrder = () => {
    this.setState({
      orderVisible: true,
    })
  }

  handleOk = e => {
    this.setState({
      orderVisible: false,
    })
  }

  render() {
    return (
      <span>
        <Badge
          count={this.props.totalAmount}
          className={'cart-button-container'}
        >
          <Button
            icon="shopping-cart"
            size="large"
            type="primary"
            className="cart-button"
            onClick={this.showOrder}
          />
        </Badge>
        <Modal
          title="Ваш заказ"
          visible={this.state.orderVisible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          bodyStyle={{padding: '0 10px'}}
        >
          <Order />
        </Modal>
      </span>
    )
  }
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
