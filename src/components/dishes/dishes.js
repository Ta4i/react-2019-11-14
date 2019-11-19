import React, {Component} from 'react'
import Dish from '../dish'
import {Row, Col, Typography} from 'antd'

const {Title} = Typography

class Dishes extends Component {
  render() {
    const {menu} = this.props
    return (
      <Row>
        <Title level={4}>Menu</Title>
        <Row type="flex" gutter={30}>
          {menu.map(dish => (
            <Col span={8}>
              <Dish key={dish.id} dish={dish} />
            </Col>
          ))}
        </Row>
      </Row>
    )
  }
}

export default Dishes
