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
import {NavLink} from 'react-router-dom'

import {Consumer as InterConsumer, interValuesCart} from '../../contexts/inter'

function Cart({className, orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  if (dishes.length === 0) {
    return null
  }

  const contextValue = interValuesCart
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
      <InterConsumer>
        {interType => (
          <div>
            <CartRow
              leftContent={contextValue.cartSubTotal[interType]}
              rightContent={`${totalPrice} $`}
            />
            <CartRow
              leftContent={contextValue.cartDeliveryCostName[interType]}
              rightContent={contextValue.cartDeliveryCost[interType]}
            />
            <CartRow
              leftContent={contextValue.cartTotal[interType]}
              rightContent={`${totalPrice} $`}
            />
            <NavLink to={'/order'} activeStyle={{display: 'none'}}>
              <Button type="primary" size="large" block>
                {contextValue.cartButton[interType]}
              </Button>
            </NavLink>
          </div>
        )}
      </InterConsumer>
    </div>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Cart)
