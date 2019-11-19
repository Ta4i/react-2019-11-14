import React, {Component} from 'react'
import Dish from '../dish'

import {Row} from 'antd'

class Dishes extends Component {
  render() {
    const {menu} = this.props
    return (
      <Row type="flex" gutter={30}>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </Row>
    )
  }
}

export default Dishes
