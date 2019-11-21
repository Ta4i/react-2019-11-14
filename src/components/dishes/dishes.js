import React, {Component} from 'react'
import Dish from '../dish'
import {Button, Typography, Row, Col} from 'antd'
import { restaurants } from '../../fixtures'

class Dishes extends Component {
  render() {
    const {menu} = this.props
    return (
        <div>
        {menu.map(dish => {
          return <Dish key={dish.id} dish={dish} />
        })}
        </div>
    )
  }
}

export default Dishes
