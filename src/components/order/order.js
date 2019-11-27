import React, {Component} from 'react'
import connect from 'react-redux/es/connect/connect'
import {Typography, Card, Row, Col} from 'antd'

const {Text} = Typography

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
      <Card bordered={false}>
        {Object.keys(this.props.cart).map(dishId => (
          <Row key={dishId} type="flex" justify="space-between">
            <Col xs={16} md={16} lg={20} align="left">
              <Text>{this.state.allDishes[dishId].name}</Text>
            </Col>
            <Col xs={8} md={6} lg={4} align="right">
              <Text>
                {this.state.allDishes[dishId].price * this.props.cart[dishId]} $
              </Text>
            </Col>
          </Row>
        ))}
        <div key="total" style={{paddingTop: '10px'}}>
          <Row type="flex" justify="space-between">
            <Col xs={16} md={16} lg={20} align="right">
              <Text style={{color: 'red'}} strong>
                ИТОГО
              </Text>
            </Col>
            <Col xs={8} md={6} lg={4} align="right">
              <Text style={{color: 'red'}} strong>
                {this.computeTotalAmount()} $
              </Text>
            </Col>
          </Row>
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
