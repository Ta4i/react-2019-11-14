import React, {Component} from 'react'
import Dish from '../dish'
import {Typography, List} from 'antd'
import './dishes.css'

class Dishes extends Component {
  render() {
    const {menu} = this.props

    return (
      <section className="dishes-section">
        <Typography.Title level={3} className="dishes-section__title">
          Menu
        </Typography.Title>
        <List
          grid={{gutter: 16, column: 4}}
          dataSource={menu}
          renderItem={dish => (
            <List.Item>
              <Dish key={dish.id} dish={dish} />
            </List.Item>
          )}
        />
      </section>
    )
  }
}

export default Dishes
