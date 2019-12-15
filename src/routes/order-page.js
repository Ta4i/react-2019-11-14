import React, {Component} from 'react'
import Cart from '../components/cart'
import OrderForm from '../components/order-form'
import {Consumer as LangConsumer} from '../contexts/language'
import {Consumer as UserConsumer} from '../contexts/user'

class OrderPage extends Component {
  render() {
    return (
      <LangConsumer>
        {language => (
          <UserConsumer>
            {userName => (
              <div>
                <Cart language={language} />
                <OrderForm
                  onUserNameChange={this.props.onUserNameChange}
                  language={language}
                />
              </div>
            )}
          </UserConsumer>
        )}
      </LangConsumer>
    )
  }
}

export default OrderPage
