import React, {Component} from 'react'
import connect from 'react-redux/es/connect/connect'
import {Card, Typography, Button, Row, Col} from 'antd'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allDishes: Order.findAllDishes(props.restaurants),
    }
  }

  static findAllDishes(restaurants) {
    const dishesMap = restaurants.reduce(
      (acc, restaurant) =>
        restaurant.menu.reduce((acc, dish) => {
          acc[dish.id] = dish
          return acc
        }, acc),
      []
    )
    console.log(Object.keys(dishesMap).length + ' dishes found')
    return dishesMap
  }

  computeTotalAmount() {
    return Object.keys(this.props.cart).reduce((acc, dishId) => {
      return acc + this.state.allDishes[dishId].price * this.props.cart[dishId]
    }, 0)
  }

  render() {
    return (
      <Card>
        {Object.keys(this.props.cart).map(dishId => (
          <div key={dishId}>
            <Col xs={16} md={16} lg={20} align="left">
              <span>{this.state.allDishes[dishId].name}</span>
            </Col>
            <Col xs={8} md={6} lg={4} align="right">
              <span>
                {this.state.allDishes[dishId].price * this.props.cart[dishId]} $
              </span>
            </Col>
          </div>
        ))}
        <div key="total" style={{paddingTop: 50}}>
          <Col xs={16} md={16} lg={20} align="right">
            <span>ИТОГО</span>
          </Col>
          <Col xs={8} md={6} lg={4} align="right">
            <span>{this.computeTotalAmount()} $</span>
          </Col>
        </div>
      </Card>
    )
  }
}

const mapsStateToProps = (state, ownProps) => ({
  cart: state.cart || [],
  restaurants: state.restaurants,
})

export default connect(mapsStateToProps)(Order)
