import React from 'react'
import {Typography, Row, Col, Button} from 'antd'
import {connect} from 'react-redux'
import {selectCart, selectOrderedDishes} from '../../store/selectors'
import OrderItem from './order-item'
import {Link} from 'react-router-dom'
import {resetCart} from '../../store/action-creators'

function Order(props) {
  const {dishes, totalPrice} = props.orderedDishes
  const {resetCart} = props
  return (
    <div>
      <Typography.Title>Ваш заказ</Typography.Title>
      <Row>
        <Col span={6}>Name</Col>
        <Col span={6}>Price</Col>
        <Col span={6}>Amount</Col>
        <Col span={6}>TotalPrice</Col>
      </Row>
      {dishes.map(orderedDish => (
        <OrderItem
          key={orderedDish.dish.id}
          amount={orderedDish.amount}
          name={orderedDish.dish.name}
          price={orderedDish.dish.price}
          totalDishPrice={orderedDish.totalDishPrice}
        />
      ))}
      <Row>
        <Col span={6} offset={18}>
          {totalPrice}
        </Col>
      </Row>
      <Button type="primary" onClick={() => resetCart()}>
        <Link to="/success_order">order</Link>
      </Button>
    </div>
  )
}
const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})
const mapDispatchToProps = {
  resetCart,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
