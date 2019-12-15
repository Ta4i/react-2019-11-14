import Button from 'antd/es/button'
import cx from 'classnames'
import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import styles from './cart.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './cart.css'
import {selectOrderedDishes, selectOrderBundle} from '../../store/selectors'
import {NavLink} from 'react-router-dom'

function Cart({className, orderedDishes, language, bundle}) {
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
      <CartRow leftContent={bundle.subTotal} rightContent={`${totalPrice} $`} />
      <CartRow
        leftContent={bundle.deliveryCosts}
        rightContent={bundle.freeDeliveryCosts}
      />
      <CartRow leftContent={bundle.total} rightContent={`${totalPrice} $`} />
      <NavLink to={'/order'} activeStyle={{display: 'none'}}>
        <Button type="primary" size="large" block>
          {bundle.orderButton}
        </Button>
      </NavLink>
    </div>
  )
}

export default connect((state, ownProps) => {
  return {
    orderedDishes: selectOrderedDishes(state),
    bundle: selectOrderBundle(state, {lang: ownProps.language}),
  }
})(Cart)
