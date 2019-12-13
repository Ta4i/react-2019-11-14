import React, {Component} from 'react'
import Cart from '../components/cart'
import OrderForm from '../components/order-form'

class OrderPage extends Component {
  render() {
    return (
      <div>
        <Cart />
        <OrderForm onUserNameChange={this.props.onUserNameChange} />
      </div>
    )
  }
}

export default OrderPage
