import React from 'react'
import {Typography, Modal, Button} from 'antd'

import styles from './cart.module.css'
import CartItem from './cart-item'

import {connect} from 'react-redux'
import {closeCart} from '../../store/action-creators'

function Cart(props) {
  const {restaurants, cart, cartModalState, closeCart} = props

  let cartItems = Object.entries(cart)
  let orderedDishes = []
  let totalPrice = 0

  const toGetDishProps = id => {
    let dishProps = {}
    restaurants.forEach(restaurant => {
      for (let dish of restaurant.menu) {
        if (dish.id === id) {
          dishProps = dish
        }
      }
    })

    return dishProps
  }

  for (let value of cartItems) {
    let dish = {}
    dish.id = value[0]
    dish.name = toGetDishProps(dish.id).name
    dish.price = toGetDishProps(dish.id).price
    dish.qty = value[1]
    orderedDishes.push(dish)

    totalPrice += dish.price * dish.qty
  }

  return (
    <Modal
      className={styles.cart}
      visible={cartModalState}
      onOk={() => closeCart()}
      onCancel={() => closeCart()}
      footer={[
        <Typography.Title level={4}>
          Total price: {totalPrice} $
        </Typography.Title>,
        <Button onClick={() => closeCart()}>Cancel</Button>,
        <Button type="primary" onClick={() => closeCart()}>
          Ok
        </Button>,
      ]}
      bodyStyle={{paddingTop: 50}}
    >
      {orderedDishes.map(item => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </Modal>
  )
}

const mapsStateToProps = state => ({
  cart: state.cart,
  restaurants: state.restaurants,
  cartModalState: state.cartModal,
})

const mapDispatchToProps = {
  closeCart: closeCart,
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(Cart)
