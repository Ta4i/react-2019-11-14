import React, {Component} from 'react'
import Dish from '../dish'
import {Typography} from 'antd'

class Dishes extends Component {
  render() {
    const {menu} = this.props

    return (
      <section className="descriptionSection">
        <Typography.Title level={3} className="descriptionSection__title">
          Menu
        </Typography.Title>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </section>
    )
  }
}

export default Dishes
