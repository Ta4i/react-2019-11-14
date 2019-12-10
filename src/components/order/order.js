import React from 'react'
import styles from './order.module.css'
import CartRow from '../cart/cart-row'
import CartItem from '../cart/cart-item'
import {connect} from 'react-redux'
import {selectOrderedDishes} from '../../store/selectors'
import {Link} from 'react-router-dom'
import {Card, Button} from 'antd'

function Order({orderedDishes, history}) {
  const {dishes, totalPrice} = orderedDishes

  if (dishes.length === 0) {
    return (
      <div className={styles.orderEmpty}>
        <h1>Please, choose some dishes at start...</h1>
      </div>
    )
  }

  return (
    <div className={styles.order}>
      <Card title="Your order" style={{width: 500}}>
        {dishes.map(({dish, amount, restaurant}) => (
          <CartItem
            dish={dish}
            amount={amount}
            restaurant={restaurant}
            key={dish.id}
          />
        ))}

        <hr />

        <CartRow leftContent={'Sub-total'} rightContent={`${totalPrice} $`} />
        <CartRow leftContent={'Delivery costs'} rightContent="FREE" />
        <CartRow leftContent={'Total'} rightContent={`${totalPrice} $`} />

        <Link to="/order-complete">
          <Button type="primary" size="large" block>
            Complete order
          </Button>
        </Link>
      </Card>
    </div>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Order)
