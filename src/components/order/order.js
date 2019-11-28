import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import styles from './order.module.css'
import {Card, Typography, Button, Col} from 'antd'
import {showTotal} from '../../store/action-creators'

const Order = props => {
  let allDishes = []

  props.restaurants.forEach(
    restaurant => (allDishes = [...allDishes, ...restaurant.menu])
  )

  // сделали массив блюд всех ресторанов

  let totalPrice = 0

  const cardDishes = _.map(props.cart, (val, key) => {
    const dish = allDishes.find(dish => dish.id === key) //находим по ключу блюдо
    const price = dish.price * val //находим по значению цену
    totalPrice += price
    if (val) {
      return (
        <div key={val * Math.random()}>
          {dish.name} x {val} = ${price}
        </div>
      )
    }
    return 0
  })

  const filteredDishes = _.filter(cardDishes, function(o) {
    return o
  })

  return !props.showTotal && filteredDishes.length ? (
    <Card className={styles.productDetailedOrderCard}>
      <Col xs={16} md={16} lg={20} align="left">
        <Typography.Title level={2} className={styles.title}>
          Ваш заказ
        </Typography.Title>
        <Typography.Title level={4} className={styles.title}>
          {filteredDishes}
        </Typography.Title>

        {!!totalPrice && (
          <div className={styles.price}>Total: ${totalPrice}</div>
        )}
      </Col>
      <Col xs={8} md={6} lg={4} align="right">
        <div className={styles.counter}>
          <Button.Group>
            <Button
              className={styles.button}
              icon="close"
              onClick={() => props.showTotalFromDispatch()}
            />
          </Button.Group>
        </div>
      </Col>
    </Card>
  ) : null
}
const mapStateToProps = ({restaurants, cart, count, showTotal}) => ({
  restaurants,
  cart,
  count,
  showTotal,
})
const mapDispatchToProps = {
  showTotalFromDispatch: showTotal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
