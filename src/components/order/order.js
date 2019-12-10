import React, {Component} from 'react'
import Hero from '../hero'
import AverageRating from '../average-rating'
import {Col, Row} from 'antd'
import styles from '../restaurant/restaurant.module.css'
import Reviews from '../reviews/reviews'
import Dishes from '../dishes/dishes'
import Cart from '../cart/cart'
import {connect} from 'react-redux'
import {selectOrderedDishes} from '../../store/selectors'

class Order extends Component {
  render() {
    const {dishes, totalPrice} = orderedDishes
    if (dishes.length === 0) {
      return null
    }

    return (
      <div>
        <Hero heading={name}>
          {this.state.error ? null : <AverageRating id={id} />}
        </Hero>
        <Row>
          <Col span={18} className={styles.restaurantContent}>
            <Reviews id={id} />
            <Dishes menu={menu} />
          </Col>
          <Col span={6}>
            <Cart />
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Order)
