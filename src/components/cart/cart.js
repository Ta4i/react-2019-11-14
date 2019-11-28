import Button from 'antd/es/button'
import cx from 'classnames'
import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import styles from './cart.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './cart.css'

function Cart({className, orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
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
      <Button type="primary" size="large" block>
        Order
      </Button>
    </div>
  )
}

export default connect(state => {
  const {cart, restaurants} = state
  const orderedDishes = restaurants.reduce(
    (result, restaurant) => {
      restaurant.menu.forEach(dish => {
        const amount = cart[dish.id]
        if (amount) {
          const totalDishPrice = amount * dish.price
          result.totalPrice += totalDishPrice
          result.dishes.push({
            dish,
            amount,
            totalDishPrice,
          })
        }
      })
      return result
    },
    {
      dishes: [],
      totalPrice: 0,
    }
  )

  return {
    orderedDishes,
  }
})(Cart)
