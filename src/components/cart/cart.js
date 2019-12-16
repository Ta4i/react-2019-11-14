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
import {
  Consumer as LanguageConsumer,
  languageVars,
} from '../../contexts/language'

function Cart({className, orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  if (dishes.length === 0) {
    return null
  }
  console.log('Cart render')
  return (
    <LanguageConsumer>
      {language => (
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

          <CartRow
            leftContent={languageVars.cartSubTotal[language]}
            rightContent={`${totalPrice} $`}
          />
          <CartRow
            leftContent={languageVars.cartDeliveryHeading[language]}
            rightContent={languageVars.cartDeliveryValue[language]}
          />
          <CartRow
            leftContent={languageVars.cartTotal[language]}
            rightContent={`${totalPrice} $`}
          />
          <NavLink to={'/order'} activeStyle={{display: 'none'}}>
            <Button type="primary" size="large" block>
              {languageVars.cartButton[language]}
            </Button>
          </NavLink>
        </div>
      )}
    </LanguageConsumer>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Cart)
