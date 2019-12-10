import Button from 'antd/es/button'
import cx from 'classnames'
import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import styles from './cart.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './cart.css'
import {selectOrderedDishes} from '../../store/selectors'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom'
import OrderComplete from '../../routes/order-complete'

function Cart({className, orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  const history = useHistory()

  if (dishes.length === 0) {
    return null
  }

  return (
    <div className={cx(styles.cart, className)}>
      <TransitionGroup>
        {dishes.map(({dish, amount, restaurant}) => (
          <CSSTransition
            timeout={500}
            classNames="cart-item-animation"
            key={dish.id}
          >
            <CartItem
              dish={dish}
              amount={amount}
              restaurant={restaurant}
              key={dish.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr />

      <CartRow leftContent={'Sub-total'} rightContent={`${totalPrice} $`} />
      <CartRow leftContent={'Delivery costs'} rightContent="FREE" />
      <CartRow leftContent={'Total'} rightContent={`${totalPrice} $`} />
      <Switch>
        <Route
          path="/order"
          render={() => (
            <Button
              type="primary"
              size="large"
              block
              onClick={() => (window.location.href = 'orderComplete')}
            >
              Submit Order
            </Button>
          )}
        />
        <Route
          path="/"
          render={() => (
            <Button
              type="primary"
              size="large"
              block
              onClick={() => history.replace('/order')}
            >
              Order
            </Button>
          )}
        />
      </Switch>
    </div>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Cart)
